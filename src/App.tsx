import './App.css'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function App() {
  const getInitialTheme = (): Theme => {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored === 'light' || stored === 'dark') {
      return stored
    }
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-2xl font-bold">WIP</h1>
      </div>
    </div>
  )
}

export default App
