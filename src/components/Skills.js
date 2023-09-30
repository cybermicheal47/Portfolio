
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';


function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]'>  

<div className='w-full h-full flex flex-col justify-center  items-center' >

  <div className='flex flex-col '>
    <p className='text-white text-4xl mb-5 font-bold inline border-b-4 border-green-600 '   > My Current Skillset</p>
    <p  className='text-[#f0f0f0] '>These are the technology I have worked with</p>
  </div>
  <div className='grid grid-cols-2 mt-5 gap-6 sm:grid-cols-4 gap-4'>
   <div>
    <img src={HTML}  alt='html' style={{width: '100px'}} className='shadow-2xl  shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500'/>
   </div>
   <div>
    <img src={CSS} alt='css'  style={{width: '100px'}} className='shadow-2xl  shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500' />
   </div>
   <div>
    <img src={JavaScript} alt='javascript'  style={{width: '100px'}} className='shadow-2xl  shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500' />
   </div>
   <div>
    <img src={ReactImg} alt='ReactImg'  style={{width: '100px'}}   className='shadow-2xl  shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500' />
   </div>
   <div>
    <img src={FireBase} alt='FireBase'  style={{width: '100px'}} className='shadow-2xl  shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500' />
   </div>
   <div>
    <img src={GitHub} alt='GitHub'  style={{width: '100px'}} className='shadow-2xl  shadow-[#040c16] px-3 py-3 hover:scale-150 duration-500'   />
   </div>

  </div>

  

</div>

      
    </div>
  )
}

export default Skills
