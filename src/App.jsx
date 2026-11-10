import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import CP from './Components/CP'
import Projects from './Components/Projects'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import MathBackground from './Components/MathBackground'
import ThemeToggle from './Components/ThemeToggle'

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [])

  function toggleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <>
      <MathBackground />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CP />
        <Contacts />
        <Footer />
      </div>
    </>
  )
}

export default App