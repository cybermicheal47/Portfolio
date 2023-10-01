import React from 'react';

function Contact() {
  return (
    <div name='contact' className='mt-32 w-full h-screen bg-[#0a192f] '>
      
      <div className='flex justify-center items-center flex-col'>

        <div >
          <h2 className='border-b-2 inline border-blue-600 text-gray-50 text-4xl font-bold'>Contact</h2>
          <p className='text-gray-50 py-4'>
            If you have any questions, do not hesitate to contact me
          </p>
        </div>

        <form action='https://getform.io/f/8db49d23-06e7-4ddf-9a14-a44e42db7b7e' className='flex flex-col gap-6 max-w-[480px] w-full  px-auto mx-auto '   method="POST">
          <label className='text-white' htmlFor='name'>
            Name
          </label>
          <input className='bg-white p-2' type='text' placeholder='Name' name='name' id='name' />

          <label className='text-white' htmlFor='email'>
            Email
          </label>
          <input className='bg-white p-2' type='email' placeholder='Email' name='email' id='email' />

          <label className='text-white' htmlFor='message'>
            Message
          </label>
          <textarea className='bg-white' name='message' placeholder='Message' rows='6' id='message'></textarea>

          <button className='text-white border-2 hover:bg-blue-500 hover:border-blue-500 px-4 py-3 my-8 mx-auto flex items-center'>
           Submit Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
