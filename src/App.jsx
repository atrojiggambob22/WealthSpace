import { useState } from 'react'
import Wealthspace from './Wealthspace'


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
