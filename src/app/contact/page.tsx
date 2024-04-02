"use client";
import React from 'react'
import {number, string, z,ZodType} from 'zod';
import {useForm,SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Resolver } from 'dns';
import { userInfo } from 'os';
type Inputs={
  firstname:String,
  middlename:String,
  lastname:string,
  age:String,
  gender:String,
  place:String,
  phone:Number,
  email:string,
  password:String,
  messag:string
};
const Contact = () => {
    const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    );
     const Schema=z.object({
      firstname:z.string().min(4,{message:'a firstname is required'}).max(30),
      middlename:z.string().min(1,{message:' optinal'}).max(30),
      lastname:z.string().min(4,{message:'last name is required'}).max(30),
      age:z.string().min(0),
      gender:string().min(1,{message:"this filed is required"}).max(20),
      place:string().min(3,{message:"address place is required"}).max(30),
      phone: z.string().regex(phoneRegex, 'enter phone number').refine(phone=>phone.length===10,{message:"phone number must be 10 digit"}),
      email: z.string().email({message:'an email is required'}),
      password:z.string().refine(password=>password.length >=8,{
      message:"password must be  at least 8 character long"
      }),
      messag:z.string().min(1,{message:'message is required'}).max(20,{message:'you are exceeding message limit'})
    })
     const{
        register,
        handleSubmit,
        formState:{errors,isSubmitting},
        watch,
      }=useForm<Inputs>({
      defaultValues:{
        firstname:'',
        middlename:'',
        lastname:'',
        age:'',
        gender:'',
        place:'',
        phone:'',
        email:'',
        password:'',
        messag:''
      },
      resolver:zodResolver(Schema),
     })
     const onSubmit: SubmitHandler <Inputs> = (data) => console.log(data)

  return (
    <div  className='w-full h-full bg-[#0a192f] flex justify-center p-10 items-center '>
        <form  className='flex flex-col max-w-[600px]  h-full w-full' onSubmit={handleSubmit(onSubmit)}>
            <div className='pb-8 py-10'>
                <label className='text-4xl font-bold inline border-b-4 border-pink-600 mt-10 text-gray-300'>contact</label>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text"  id='firstname' disabled={isSubmitting} {...register('firstname')} placeholder='firstname'  />
            {errors.firstname?.message&&<div className='text-white'>{errors.firstname?.message}</div>}
            <input className='bg-[#ccd6f6] p-2 my-4' type="text"  id='middlename' disabled={isSubmitting} {...register('middlename')} placeholder='middlename'  />
            {errors.middlename?.message&&<div className='text-white'>{errors.middlename?.message}</div>}
            <input className='bg-[#ccd6f6] p-2 my-4' type="text"  id='lastname' disabled={isSubmitting} {...register('lastname')} placeholder='lastname'  />
            {errors.lastname?.message&&<div className='text-white'>{errors.lastname?.message}</div>}
            <input className='bg-[#ccd6f6] p-2 my-4' type="text"  id='age' disabled={isSubmitting} {...register('age')} placeholder='age'  />
            {errors.age?.message&&<div className='text-white'>{errors.age?.message}</div>}
            <input className='bg-[#ccd6f6] p-2 my-4' type="text"  id='gender' disabled={isSubmitting} {...register('gender')} placeholder='gender'  />
            {errors.gender?.message&&<div className='text-white'>{errors.gender?.message}</div>}
            <input className='bg-[#ccd6f6] p-2' type="text"  id='phone' disabled={isSubmitting} {...register('phone')} placeholder='phone'  />
            {errors.phone?.message&&<div className='text-white'>{errors.phone?.message}</div>}
            <input className='bg-[#ccd6f6] p-2 my-4 ' type="text"  id='place' disabled={isSubmitting} {...register('place')} placeholder='place'  />
            {errors.place?.message&&<div className='text-white'>{errors.place?.message}</div>}
            <input className='my-4 p-2 bg-[#ccd6f6] b' type="email" id='email' disabled={isSubmitting} {...register('email')} placeholder='email'/>
             {errors.email?.message&&<div className='text-white'>{errors.email?.message}</div>}
             <input className='my-4 p-2 bg-[#ccd6f6] b' type="password" id='password' disabled={isSubmitting} {...register('password')} placeholder='password'/>
             {errors.password?.message&&<div className='text-white'>{errors.password?.message}</div>}
            <input className='bg-[#ccd6f6] p-10 border-4' type="messag" id="messag" disabled={isSubmitting} {...register('messag')} placeholder='Message'/>
            {errors.messag?.message&&<div className='text-white'>{errors.messag?.message}</div>}
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' type='submit' disabled={isSubmitting}>
              Let's Collaborate
              </button>
              <div className='text-black  border-4 text-xl flex bg-red-100'>data entered <pre>{JSON.stringify(watch(),null,2)}</pre></div>
        </form>
    </div>
  )
}

export default Contact