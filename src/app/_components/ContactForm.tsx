"use client"
import React, { useActionState, useEffect } from 'react'
import { ContactType } from '../_types/contact';
import { useRouter } from 'next/navigation';

type ContactButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>;
    contact?: ContactType;
}

const ContactForm = ({ action, contact }: ContactButtonProps) => {
    const router = useRouter();
    const [state, formAction] = useActionState(action, null);

    useEffect(()=>{
        if(state?.success) router.push("/contact");
    },[state, router]);

    return (
        <form action={formAction} className='flex flex-col gap-8'>
             <input readOnly hidden name="id" value={contact?.id}/>
            <div className='space-y-5'>
                <input type='name' name='name' placeholder='Name' required defaultValue={contact?.name || ""} className='px-2 py-2 border-b border-cyan-600/30 text-xl w-full outline-none tracking-wider' />
                <input type='email' name='email' placeholder='Email' required defaultValue={contact?.email || ""} className='px-2 py-2 border-b border-cyan-600/30 text-xl w-full outline-none tracking-wider' />
            </div>
            {state?.error && (
                <div className='text-red-500'>Error : {state.error}</div>
            )}
            <button type='submit' className='bg-white text-black py-2 rounded-md font-medium cursor-pointer mt-2 tracking-wider hover:opacity-30'>Save Contact</button>
        </form>
    )
}

export default ContactForm;
