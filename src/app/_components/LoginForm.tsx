"use client"
import React, { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { loginAction } from '../actions/auth';

const LoginForm = () => {
    const [visible, setVisible] = useState<boolean>(false);
    return (
        <form action={loginAction} className='flex flex-col gap-8'>
            <div className='space-y-5'>
                <input type='email' name='email' placeholder='email id' required className='px-2 py-2 border-b border-cyan-600/30 text-xl w-full outline-none tracking-wider' />
                <div className='flex justify-between items-center border-b border-cyan-600/30'>
                    <input type={`${visible ? 'text' : 'password'}`} name='password' placeholder='password' className='px-2 py-2 text-xl w-full outline-none tracking-wider' />
                    {visible ?
                        <IoMdEye onClick={() => setVisible(!visible)} className='text-xl cursor-pointer text-gray-400 mr-2' />
                        :
                        <IoMdEyeOff onClick={() => setVisible(!visible)} className='text-xl cursor-pointer text-gray-400 mr-2' />
                    }
                </div>
            </div>
            <button type='submit' className='bg-white text-black py-2 rounded-md font-medium cursor-pointer mt-2 tracking-wider hover:opacity-30'>Login</button>
        </form>
    )
}
export default LoginForm;
