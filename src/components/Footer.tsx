type Theme = 'light' | 'dark'

type FooterProps = {
  theme?: Theme
}

export default function Footer({ theme = 'dark' }: FooterProps) {
  const textColor = theme === 'dark' ? 'text-white' : 'text-black'
  const borderColor = theme === 'dark' ? 'border-white/10' : 'border-black/10'
  const iconFilter = theme === 'dark' ? 'invert' : ''

  return (
    <footer className={`mt-10 border-t ${borderColor}`}>
      <div className="mx-auto max-w-6xl w-full px-4 py-6 md:py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <h4 className={`text-sm font-semibold uppercase tracking-wider opacity-80 ${textColor}`}>Get in touch:</h4>
          <ul className="mt-3 space-y-2 text-sm opacity-80">
            <li><a href="mailto:francesco.rocchiccioli.dev@gmail.com" className="hover:underline">francesco.rocchiccioli.02@gmail.com</a></li>
            <li className="flex items-center gap-2">
              <img src="/github.png" alt="GitHub" className={`h-4 w-4 object-contain ${iconFilter}`} />
              <a href="https://github.com/TistaMilani" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
            </li>
            <li className="flex items-center gap-2">
              <img src="/linkedin.png" alt="LinkedIn" className={`h-4 w-4 object-contain ${iconFilter}`} />
              <a href="https://www.linkedin.com/in/francesco-rocchiccioli" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <img src="/instagram.png" alt="Instagram" className={`h-4 w-4 object-contain ${iconFilter}`} />
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <img src="/lichess.png" alt="Lichess" className={`h-4 w-4 object-contain ${iconFilter}`} />
              <a href="https://lichess.org/@/TistaMilani" target="_blank" rel="noopener noreferrer" className="hover:underline">Lichess</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="mx-auto max-w-6xl w-full px-4 pb-6 text-xs opacity-60">
        <p>© {new Date().getFullYear()} Francesco Rocchiccioli. All rights reserved.</p>
      </div>
    </footer>
  )
}


