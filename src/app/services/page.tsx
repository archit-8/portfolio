import React from 'react'
import {Input} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";


export default function page() {
  
  return (
   <div className=' w-full h-screen  bg-gray-600'>
     <h1 className=' text-white text-7xl  py-40 text-center'>our support</h1>
    <div className=' max-h-[600px]    justify-between items-center   p-4 md:flex flex-cols-2 gap-8 '>
        <div className="">
           <h1 className='text-6xl  text-center text-black  '>backend</h1>
         </div>
         <div className="">
           <h1 className='text-6xl   text-center text-black  '>forntend</h1>
         </div>
         <div className="">
           <h1 className='text-6xl   text-center text-black  '>Database</h1>
         </div>
         <div className="">
           <h1 className='text-6xl  text-center text-black  '>Ui/Ux Design</h1>
         </div>

   </div>
   <div className=' w-full max-h-[500px] p-4  py-20   justify-between items-center   md:flex flex-cols-2 gap-8 '>
        <div className="">
           <h1 className='text-6xl   text-center text-black  '>website support</h1>
         </div>
         <div className="">
           <h1 className='text-6xl   text-center text-black  '>logo design</h1>
         </div>
         <div className="">
           <h1 className='text-6xl   text-center text-black  '>resume design</h1>
         </div>
         <div className="">
           <h1 className='text-6xl  mt-5 text-center text-black  mb-3'>middlware</h1>
         </div>

   </div>
   </div>
  )
}
