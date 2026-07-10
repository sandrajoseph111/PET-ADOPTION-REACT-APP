import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addpet from './components/Addpet'
import Searchpet from './components/Searchpet'
import Deletepet from './components/Deletepet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Addpet />
      <Searchpet />
      <Deletepet />
    </>
  )
}

export default App
