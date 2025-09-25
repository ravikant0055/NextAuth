import ContactForm from '@/app/_components/ContactForm';
import { updateContactAction } from '@/app/actions/contact';
import { getContactById } from '@/app/api/contact';
import React, { use } from 'react'

const EditContact = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const contact = use(getContactById(id));
  return (
    <div className='flex flex-col flex-grow justify-center items-center'>
      <div className='p-9 border border-cyan-200/40 shadow-cyan-600 shadow-2xs rounded-xl w-[540px] space-y-5'>
        <h1 className='text-2xl font-medium text-center'>Update Contact</h1>
        <ContactForm action={updateContactAction} contact={contact} />
      </div>
    </div>
  )
}

export default EditContact;
