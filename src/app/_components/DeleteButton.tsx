"use client"
import React, { useActionState } from 'react'
import { ContactType } from '../_types/contact'
import { FiTrash2 } from 'react-icons/fi';
import { deleteContact } from '../api/contact';

type DeleteButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>; 
    contact?: ContactType;
}

const DeleteButton = ({action, contact}: DeleteButtonProps) => {
  const [state, formAction] = useActionState(action,null); 
  return (
    <form action={formAction}  method='post'>
       <input readOnly hidden name="id" value={contact?.id}/>
       <button type='submit' 
        className='flex items-center gap-1 bg-red-200 text-red-500 rounded-md px-2 py-1 cursor-pointer'
        onClick={(e)=>{
            if(!confirm("Are you sure you want to delete this contact ?")){ e.preventDefault();}
        }}>
          <FiTrash2/>Delete
        </button>
    </form>
  )
}

export default DeleteButton;
