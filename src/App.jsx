// eslint-disable-next-line no-unused-vars
import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Profile from '../src/pages/Profile'


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/profile' element={<Profile />} />
         
        </Routes>
      
    </BrowserRouter>
   
  )
}
