import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Addpet from './components/Addpet'
import Searchpet from './components/Searchpet'
import Deletepet from './components/Deletepet'
import Viewpet from './components/Viewpet'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

      <Route path='/' element={<Addpet/>}/>
      <Route path='/de' element={<Deletepet/>}/>
      <Route path='/se' element={<Searchpet/>}/>
      <Route path='/vi' element={<Viewpet/>}/>


        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
