// import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  

  return (
    <>
      {/* <h1 className='text-xl font-bold text-red-500'>Hello</h1> */}
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  )
}

export default App
// "vite": "^4.4.5"