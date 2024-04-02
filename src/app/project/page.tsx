'use client';
import React from 'react'


function page() {
  return (
  
    <div className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <h1 className=' text-white text-9xl py-20 text-center'>Projects</h1>
    <div className=' w-full max-h-[1200px] p-10 py-40   justify-between items-center   md:flex flex-cols-2 gap-10 '>
        <div className="border-8   border-indigo-600 bg-red-200">
           <h1 className='text-3xl  mt-5 text-center text-black  mb-3'>Application Development</h1>
           <p className='text-black ' >Full Stack native application development involves developing
                         native apps, i.e. the apps that work only on a particular platform. For example,
                         Apple TV is an application that is an OTT platform and it is only available for 
                         IOS users. It is also a full-stack application with a front-end for the user to
                         select what they want to watch, a backend that works behind it and users are  </p>
         </div>
         <div className="border-8  border-indigo-600  bg-red-200">
           <h1 className='text-3xl  mt-5 text-center text-black  mb-3'>Mobile Development</h1>
           <p className='text-black ' >Full Stack mobile development also involves the same as a
                        web development full stack project, the difference being the platform on which 
                        they operate. This means that these Full Stack projects run on mobile devices. 
                        For instance: Whatsapp chats application. We use WhatsApp daily in our lives 
                        and it is a full-stack mobile application. We all know about the front-end that
                          helps us interact with the users 
                        and users are  </p>
         </div>
         <div className="border-8 w-90 border-indigo-600 bg-red-200">
           <h1 className='text-3xl  mt-5 text-center text-black  mb-3'>Application Development</h1>
           <p className='text-black ' >Full Stack native application development involves developing
                         native apps, i.e. the apps that work only on a particular platform. For example,
                         Apple TV is an application that is an OTT platform and it is only available for 
                         IOS users. It is also a full-stack application with a front-end for the user to
                         select what they want to watch, a backend that works behind it and users are  </p>
         </div>
   

        </div>
        </div>
     
  )
}

export default page