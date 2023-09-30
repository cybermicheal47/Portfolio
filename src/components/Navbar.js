import React, { useState } from 'react'
import Logo from '../assets/logo3.png'
import {FaTimes , FaBars}  from 'react-icons/fa'
import {Link} from 'react-scroll'

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
        <li>  <Link    to="main" spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link></li>
        
        <li> <Link    to="skills" spy={true} smooth={true} offset={50} duration={500}>
          Skills
        </Link></li>
        <li> <Link    to="projects" spy={true} smooth={true} offset={50} duration={500}>
          Projects
        </Link></li>
        <li> <Link   to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link></li>
      </ul>
    </div>

{/* //mobile menu */}
<div onClick={handleclick} className='md:hidden z-40'>
{!mobnav ? <FaBars/> : <FaTimes/>}
</div>
 
 <>
 <ul className={!mobnav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center md:hidden'}>
        <li className='py-6 text-4l'> <Link onClick={handleclick}  to="main" spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link></li>
        
        <li className='py-6 text-4l'> <Link onClick={handleclick}  to="skills" spy={true} smooth={true} offset={50} duration={500}>
          Skills
        </Link></li>
        <li className='py-6 text-4l'> <Link onClick={handleclick}  to="projects" spy={true} smooth={true} offset={50} duration={500}>
          Projects
        </Link></li>
        <li className='py-6 text-4l'> <Link onClick={handleclick}  to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link></li>
      </ul>
 </>


    </div>
    
  )
}

export default Navbar
