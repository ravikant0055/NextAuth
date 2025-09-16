import LoginForm from '@/app/_components/LoginForm';
import Link from 'next/link';
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col flex-grow justify-center items-center'>
        <div className='p-9 border border-cyan-200/40 shadow-cyan-600 shadow-2xs rounded-xl w-[540px]'>
                <h1 className='text-4xl font-medium mb-9'>Login</h1>
                <LoginForm/>
                <h1 className='text-sm text-center tracking-wider mt-9'>Don't have an account? <Link href='/' className='text-cyan-400'>Register</Link></h1>
            </div>
    </div>
  )
}

export default Login;