import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './components/Navbar'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
      <Home/>
      <About/>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <SocialLinks></SocialLinks>
      <Contact></Contact>

    </>
  )
}

export default App
