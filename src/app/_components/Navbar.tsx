"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Navbar = () => {
  const pathname: string = usePathname();

  const linkClass = (path: string): string =>
    pathname === path
      ? 'text-cyan-500'
      : 'hover:text-cyan-600';

  return (
    <div className='border-b-1 border-cyan-300/30 text-white'>
      <div className='flex justify-between mx-auto p-4'>
        <Link href='/contact' className={`text-xl font-medium ${linkClass('/contact')}`}>Contact</Link>
        <div className='space-x-5 text-lg'>
            <Link href='/login' className={linkClass('/login')}>Login</Link>
            <Link href='/register' className={linkClass('/register')}>Register</Link>
        </div>
      </div> 
    </div>
  )
}

export default Navbar;