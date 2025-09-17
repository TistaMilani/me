import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Favicon is now set in index.html for better GitHub Pages compatibility

  return (
    <>
      <h1>Vite + React + TS & Tilescale</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
