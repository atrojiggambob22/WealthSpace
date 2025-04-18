import { useState } from 'react'
import Wealthspace from './Wealthspace'
// import Nav from './nav.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Wealthspace/>
   {/* <Nav/> */}
   </>
  )
}

export default App
