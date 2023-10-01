import React, { useState } from 'react'
import House from '../assets/projects/HouseMarketplace.png'
import Landingpage from '../assets/projects/landingpagee.png'
import Store from '../assets/projects/store.png'
import cvv from '../assets/projects/cvv.png'
import githubfinder from '../assets/projects/githubfinder.png'
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineSelect } from "react-icons/ai";

function Project() {
const Projects = [
{
  id:1,
  image: House,
  demoLink: 'https://housemarketplace-sigma.vercel.app',
  githubLink: 'https://github.com/cybermicheal47/housemarketplace',
},
{
  id:2,
  image:Landingpage,
  demoLink: 'https://cybermicheal47.github.io/LandingPage/',
  githubLink: 'https://github.com/cybermicheal47/LandingPage',
},

{
  id: 3,
  image: Store,
  demoLink: 'https://store-f37e3.web.app/',
  githubLink: 'https://github.com/cybermicheal47/shoppingcartReact',
},
{
  id: 4,
  image: cvv,
  demoLink: 'https://cvbuilder-5eb5f.web.app/',
  githubLink: 'https://github.com/cybermicheal47/cvbuilderReact',
},
{
  id: 5,
  image: githubfinder,
  demoLink: 'https://githubfinder-react-34od.vercel.app/',
  githubLink: 'https://github.com/cybermicheal47/Githubfinder-React',
},

]










const [hover, sethover] = useState(false)

const mousehover = () => {
  sethover(!hover)
}

  return (
    <div className='w-full md:h-screen text-gray-50 bg-[#0a192f]' name='projects'>  
    <div className='flex flex-col justify-center  w-full h-full items-center'>
  
      <div>
        <p className='text-4xl w-32 border-b-4 border-blue-600'>Projects</p>
        <p className='py-6 pl-5'> Some of my recent Project</p>
      </div>
      
      <section className='grid sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between mx-5'>
         {Projects.map((project) =>(
        <div className='shadow-lg shadow-[#040c16] containerbtn' >
        <img src={project.image}  alt="Projects" className='w-full h-full'/>
     
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
    <button className='btn flex gap-2'> <AiOutlineSelect />Demo</button> </a>
  
    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
    <button className='btn2 flex gap-2'>  <AiFillGithub />GitHub</button>
  </a>
    </div> )) }

      </section>


















    </div>



      
    </div>
  )
}

export default Project
