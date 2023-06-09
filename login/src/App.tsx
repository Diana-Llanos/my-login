//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import './login.css'
import { Login } from './components/Login'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  
  

  return (
    <div> 
            
      <BrowserRouter>
       <Routes>                                     
        <Route path="/" element={<Login/>}/>
       </Routes>  
      </BrowserRouter>

    </div>
   
  )
}

export default App
