"use client"
import React from 'react'
import { logoutAction } from '../actions/auth';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();  
  const handleLogout = async () => {
     try {
         await logoutAction();
         router.push("/login");
         router.refresh();
     } catch (error) {
         console.log("Login Failed 2 : ", error);
     }
  }  
  return <button onClick={handleLogout} className='bg-[#ffc5c5] text-[#a40000] border rounded-2xl text-sm py-1 px-4 font-medium transition-colors cursor-pointer'>Logout</button>;
}

export default LogoutButton;
