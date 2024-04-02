'client user';
import React from 'react'
import  product from '../images/product.jpg';
import Image from 'next/image';
import ui from '../images/ui.jpg';
import th from '../images/th.jpg';

function footer() {
  return (
    <div className='w-full  h-full text-center '>
    <div className='max-w-[1240px] w-full h-full  mx-auto p-2 flex-auto justify-between items-center  md:flex flex-cols-2 gap-8 '>
        <div className="flex-auto w-40  h-full ">
           <Image src={product} alt={''} className='h-10 w-10 rounded-full mb-3'/>
           <h1 className='text-2xl text-left mb-3'>Product Design</h1>
           <p className='text-left ' >Rescue lets us provide a higher<br/>
              level of supportto our customers,<br/> 
              and users are  </p>
         </div>
         <div className="flex-auto w-40  h-full  ">
           <Image src={ui} alt={''} className='h-10 w-10 rounded-full mb-3'/>
           <h1 className='text-2xl text-left mb-3'>UI/UX Design</h1>
           <p className='text-left ' >Rescue lets us provide a higher<br/>
              level of supportto our customers,<br/> 
              and users are  </p>
         </div>
         <div className="flex-auto w-40  h-full ">
           <Image src={th} alt={''} className='h-10 w-10 rounded-full mb-3'/>
           <h1 className='text-2xl text-left mb-3'>Interactive Design</h1>
           <p className='text-left ' >Rescue lets us provide a higher<br/>
              level of supportto our customers,<br/> 
              and users are  </p>
         </div>

        </div>
        </div>
  )
}

export default footer