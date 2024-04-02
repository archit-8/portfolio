import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image';
import  pro from  '../images/pro.png';
import { HiRefresh } from 'react-icons/hi'
function Main() {
  const newLocal = 'max-w-[1240px] w-full  mx-auto p-2 flex-auto justify-between items-center  md:flex flex-cols-2 gap-8'
  return (
    <div className='w-full h-full  md:h-screen p-2 flex items-center py-16'>
    <div className=  {newLocal}>
    <div className='flex-col text-left'>
    <Image src={pro} alt='/' width={400} height={300}/>
    </div>
    <div className='flex-col text-left'>{/* container right*/}
       <h1 className='py-4 text-5xl  text-left text-black-900'>
        An Interactive <br/> 
        Designer
        </h1>
        <p className='py-4 text-black   breal-normal text-left text-xl  mx-30'>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/>
         sed do eiusmod tempor incididunt ut labore et dolore magna<br/>
         Ut enim ad minim veniam, quis nostrud exercitation ullamco<br/>
        </p>
        <button className=" bg-purple-900 hover:bg-blue-500 text-white-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Button
        </button>
        <a href='#' className=' px-3 font-medium text-black-600 underline dark:text-blue-500 hover:no-underline'>
         My works
        </a>
        <div className=' max-w-[500px]  '>
            <div className=' items-left mt-10 max-w-[100px] '>
               <p className= 'text-black mb-[-40px]'>Follow me on </p>
              </div>
        <div className='flex  justify-between  max-w-[300px] m-auto mt-[10px]  '>
           <div className='rounded-full shadow-lg shadow-gray-400  p-3  coursor-pointer hover:sacle'>
           <a target='"_blank' href='https://in.linkedin.com/'> <FaLinkedin/></a>
           </div>
           <div className='rounded-full shadow-lg shadow-gray-400  p-3  coursor-pointer hover:sacle'>
           <a target='_blank' href='https://github.com/' ><FaGithub/></a>
           </div>
           <div className='rounded-full shadow-lg shadow-gray-400  p-3  coursor-pointer hover:sacle'>
            <a target='_blank'href='https://mail.google.com/mail/u/0/?hl=en&tab=wm'><AiOutlineMail/></a>
           </div>
           <div className='rounded-full shadow-lg shadow-gray-400  p-3  coursor-pointer hover:sacle'>
            <a target='_blank' href=''><BsFillPersonLinesFill/>
            </a>
          </div>
        
        </div>
       </div>
    </div> {/* container right*/}
    </div>
    
    </div>
  
  )
}

export default Main