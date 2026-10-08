import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import bg from '../public/mecaforbg.png'
import logo from '../public/mecalogo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section>
        <img src={logo} alt="logo" />
        <img src={bg} alt='bg'/>
        <button></button>

      </section>
    </>
  )
}

export default App
