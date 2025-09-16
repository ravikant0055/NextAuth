import Link from 'next/link';
import React from 'react'
import { getSession } from '../_lib/session';
import LogoutButton from './LogoutButton';

const Navbar = async () => {
  // const pathname: string = usePathname();

  // const linkClass = (path: string): string =>
  //   pathname === path
  //     ? 'text-cyan-500'
  //     : 'hover:text-cyan-600';
  //   ${linkClass('/contact')}
  const session = await getSession();

  return (
    <div className='border-b-1 border-cyan-300/30 text-white'>
      <div className='flex justify-between mx-auto p-4'>
        <Link href='/contact' className="text-xl font-medium text-cyan-500">Next Auth</Link>
        <div className='space-x-5 text-lg'>
          {session ? (
            <>
              <Link href='/contact'>Contact</Link>
              <LogoutButton/>
            </>
           ) : (
           <>
              <Link href='/login'>Login</Link>
              <Link href='/register'>Register</Link>
           </>)}
           
        </div>
      </div> 
    </div>
  )
}

export default Navbar;