import React from 'react'
import { getSession } from '../_lib/session';
import { getContacts } from '../api/contact';
import ContactList from '../_components/ContactList';

const Contact  = async () => {
  const user = await getSession();
  if(!user){
     return (
        <div>
            Please <a href='/login' className='font-medium text-blue-700'>Login</a> to view Contact
        </div>
     )
  }

  const contacts = await getContacts(user?.id);
  if(!contacts || contacts.length === 0){
    return (
       <div>
            Please <a href='/contact/new' className='font-medium text-blue-700'>Add a contact</a> to view contact list
        </div>
    )
  }

  return (
    <div className='space-y-2'>
      <div className='flex justify-between py-5'>
        <h1 className='text-xl font-medium'>Contact List</h1>
        <a href='/contact/new' className='bg-green-700 text-white px-3 py-2 rounded-md text-sm'>Add Contact</a>
      </div>
      <ContactList contacts={contacts}/>
    </div>
  )
}

export default Contact;