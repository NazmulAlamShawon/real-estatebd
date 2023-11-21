// eslint-disable-next-line no-unused-vars
import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-600 shadow-md">
     <div className=" flex justify-between  items-center max-w-6xl  mx-auto"> 
     <Link to=''>
     <h1 className="font-bold text-sm sm:text flex flex-wrap"> 
           <span className="text-white">RealEstate </span>
           <span className="text-black">Bazar </span>
       </h1>
       </Link>
       {/*  form search */}
       <form className=" p-3 rounded-lg flex items-center border-spacing-1 w-24 sm:64">
        <input type="text" placeholder="search" className=" bg-transparent focus:outline-none"/>
          <FaSearch  className='text-slate-200'/>
       </form>
       <ul className=" flex gap-4 ">
         <Link to ='/'>
             <li className="hidden sm:inline text-slate-100 hover:underline">Home</li>
         </Link>
         <Link to ='/about'>
         <li className="hidden sm:inline text-slate-100 hover:underline">About</li>
         </Link>
         <Link to ='/signin'>
         <li className=" text-slate-100 hover:underline"> Sign In</li>
         </Link>
       </ul>
        
     </div>
   </header>
  )
}
