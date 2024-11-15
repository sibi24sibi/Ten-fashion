import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Shopping_Cart} from './components/Shopping-Cart/Shopping_Cart'

function App() {
  const [count, setCount] = useState(0)

  const url = import.meta.env.VITE_PORT_URL

  console.log(url)

  return (
    <>
      <Shopping_Cart />
    </>
  )
}

export default App
