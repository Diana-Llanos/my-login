import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState<number>(5)

  const changeNumber = () => {

    setNumber(2)
  }

  return (
    <div className='App'>
      {number}
      <button onClick={changeNumber}>Change number</button>
    </div>
   
  )
}

export default App
