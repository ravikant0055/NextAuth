import React from 'react'
import { ContactType } from '../_types/contact';
import Link from 'next/link';
import { FiEdit } from 'react-icons/fi';
import DeleteButton from './DeleteButton';
import { deleteContactAction } from '../actions/contact';

const ContactList = ({contacts}: {contacts: ContactType[]}) => {
  return (
    <div className='space-y-4'>
        {contacts.map((contact)=>(
           <div key={contact.id} className='flex justify-between border border-cyan-600/80 rounded-md px-5 py-2'>
                <div>
                    <h1 className='font-bold'>{contact.name}</h1>
                    <p className='text-gray-300'>{contact.email}</p>
                </div>  
                <div className='flex gap-5 items-center'>
                    <Link href={`/contact/edit/${contact.id}`} className='flex items-center gap-1 bg-blue-200 text-blue-500 rounded-md px-2 py-1'><FiEdit/>Edit</Link>
                    <DeleteButton action={deleteContactAction} contact={contact}/>
                </div>  
           </div>
        ))}
    </div>
  )
}

export default ContactList;
