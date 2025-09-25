import ContactForm from '@/app/_components/ContactForm';
import { createContactAction } from '@/app/actions/contact';
import React from 'react'

const NewContact = () => {
  return (
    <div className='flex flex-col flex-grow justify-center items-center'>
      <div className='p-9 border border-cyan-200/40 shadow-cyan-600 shadow-2xs rounded-xl w-[540px] space-y-5'>
        <h1 className='text-2xl font-medium text-center'>Create New Contact</h1>
        <ContactForm action={createContactAction}/>
      </div>
    </div>
  )
}

export default NewContact;
