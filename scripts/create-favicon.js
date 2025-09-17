#!/usr/bin/env node

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GITHUB_USERNAME = 'TistaMilani';
const PROFILE_PIC_URL = `https://avatars.githubusercontent.com/${GITHUB_USERNAME}`;
const OUTPUT_DIR = path.join(__dirname, '..', 'public');
const FAVICON_SIZES = [16, 32, 48, 64, 128, 256];

async function downloadProfilePicture() {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(OUTPUT_DIR, 'profile-pic.png'));
    
    const request = https.get(PROFILE_PIC_URL, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        fs.unlink(path.join(OUTPUT_DIR, 'profile-pic.png'), () => {});
        // Follow redirect
        https.get(response.headers.location, (redirectResponse) => {
          if (redirectResponse.statusCode !== 200) {
            reject(new Error(`Failed to download profile picture: ${redirectResponse.statusCode}`));
            return;
          }
          
          const redirectFile = fs.createWriteStream(path.join(OUTPUT_DIR, 'profile-pic.png'));
          redirectResponse.pipe(redirectFile);
          
          redirectFile.on('finish', () => {
            redirectFile.close();
            console.log('✅ Downloaded profile picture');
            resolve();
          });
          
          redirectFile.on('error', (err) => {
            fs.unlink(path.join(OUTPUT_DIR, 'profile-pic.png'), () => {});
            reject(err);
          });
        }).on('error', (err) => {
          reject(err);
        });
        return;
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download profile picture: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log('✅ Downloaded profile picture');
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(path.join(OUTPUT_DIR, 'profile-pic.png'), () => {});
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function createFavicons() {
  const inputPath = path.join(OUTPUT_DIR, 'profile-pic.png');
  
  try {
    // Create ICO file with multiple sizes
    const icoBuffer = await sharp(inputPath)
      .resize(32, 32, { fit: 'cover' })
      .png()
      .toBuffer();
    
    fs.writeFileSync(path.join(OUTPUT_DIR, 'favicon.ico'), icoBuffer);
    console.log('✅ Created favicon.ico');
    
    // Create PNG favicons for different sizes
    for (const size of FAVICON_SIZES) {
      await sharp(inputPath)
        .resize(size, size, { fit: 'cover' })
        .png()
        .toFile(path.join(OUTPUT_DIR, `favicon-${size}x${size}.png`));
      console.log(`✅ Created favicon-${size}x${size}.png`);
    }
    
    // Create Apple touch icon
    await sharp(inputPath)
      .resize(180, 180, { fit: 'cover' })
      .png()
      .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));
    console.log('✅ Created apple-touch-icon.png');
    
    // Clean up temporary file
    fs.unlinkSync(inputPath);
    console.log('✅ Cleaned up temporary files');
    
  } catch (error) {
    console.error('❌ Error creating favicons:', error);
    throw error;
  }
}

async function main() {
  try {
    console.log(`🔄 Fetching profile picture for ${GITHUB_USERNAME}...`);
    await downloadProfilePicture();
    
    console.log('🔄 Creating favicon files...');
    await createFavicons();
    
    console.log('🎉 Favicon creation complete!');
    console.log('\nNext steps:');
    console.log('1. Update your index.html to reference the new favicon');
    console.log('2. Commit and push the changes');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
