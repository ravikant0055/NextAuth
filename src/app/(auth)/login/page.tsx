"use client"
import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Login = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div className='flex flex-col flex-grow justify-center items-center'>
        <div className='border border-cyan-200/40 shadow-cyan-600 shadow-2xs rounded-xl w-[540px]'>
            <div className='flex flex-col gap-8 p-9'>
                <h1 className='text-4xl font-medium'>Login</h1>
                <div className='space-y-5'>
                    <input type='text' placeholder='username' className='px-2 py-2 border-b border-cyan-600/30 text-xl w-full outline-none tracking-wider'/>
                    <div className='flex justify-between items-center border-b border-cyan-600/30'>
                        <input type={`${visible ? 'text' : 'password'}`} placeholder='password' className='px-2 py-2 text-xl w-full outline-none tracking-wider'/>
                        {visible ? 
                           <IoMdEye onClick={()=>setVisible(!visible)} className='text-xl cursor-pointer text-gray-400 mr-2'/>
                            :
                           <IoMdEyeOff onClick={()=>setVisible(!visible)} className='text-xl cursor-pointer text-gray-400 mr-2'/>
                        }
                    </div>
                </div>
                <button className='bg-white text-black py-2 rounded-md font-medium cursor-pointer mt-2 tracking-wider'>Login</button>
                {/* <h1 className='text-sm text-start tracking-wider'>Don't have an account? <Link href='/' className='text-cyan-400'>Register</Link></h1> */}
            </div>
        </div>
    </div>
  )
}

export default Login;