import React, { useState } from 'react'
import Logo from '../assets/logo3.png'
import {FaTimes , FaBars}  from 'react-icons/fa'

function Navbar() {
 const[mobnav, setmobnav] = useState(false)

 const handleclick = () => setmobnav(!mobnav)

  return (
    <div className='bg-[#0a192f] h-[80px] w-full fixed flex justify-between text-gray-50 items-center'>
      <div>
        <img src={Logo} alt='Logo' style={{width: '50px'}} />
      </div>
      <div>
      <ul className='hidden md:flex '>
        <li> Home</li>
        
        <li> Skills</li>
        <li> Projects</li>
        <li> Contact</li>
      </ul>
    </div>

{/* //mobile menu */}
<div onClick={handleclick} className='       z-10      md:hidden'>
{!mobnav ? <FaBars/> : <FaTimes/>}
</div>
 
 <>
 <ul className={!mobnav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center md:hidden'}>
        <li className='py-6 text-4l '> Home</li>
        
        <li className='py-6 text-4l'> Skills</li>
        <li className='py-6 text-4l'> Project</li>
        <li className='py-6 text-4l'> Contact</li>
      </ul>
 </>


    </div>
    
  )
}

export default Navbar
