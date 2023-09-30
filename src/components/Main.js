import React from 'react'
import { HiArrowNarrowDown } from 'react-icons/hi';
const Main = () => {
  return (
  
    <div name='main' className='w-full h-screen bg-[#0a192f]'>    // container css
      <div className=' max-w-[1000px]:  mx-auto  flex flex-col justify-center items-center h-full ' style={{color:'white'}}>
        <p className='text-blue-800'> My Name is <span className='text-4xl sm:text-7xl font-bold text-[white]  pl-6'> Oscar</span> </p>
        
        <h1 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'> I am a Frontend Developer</h1>

        <p className='pl-3 sm:text-[#8892b0] py-4 max-w-[700px]'>
        My expertise lies in the art of translating design concepts into responsive and 
        interactive web interfaces. 
        I understand the importance of pixel-perfect precision and 
        ensuring that every element on the screen not only looks great 
        but also functions seamlessly.
        </p>
        <div>
          <button className='text-[white]  flex items-center py-3 px-4 border-2 hover:bg-blue-600  hover:border-blue-600'>View Work <HiArrowNarrowDown className='ml-3' /></button>
        </div>
      </div>


      
    </div>
  )
}

export default Main
