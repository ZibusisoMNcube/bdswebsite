'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function MyContactForm () {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_51jcrfe', 'template_39k97mi', form.current, {
            publicKey: 'gU_Fg0FZ38ApgHYwb',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };


  return (
   
     <>
     <form ref={form} onSubmit={sendEmail}>
 
       <div className='grid grid-cols-2'>
         <div><input id="name" type="text" name="name"  placeholder="Name"/></div>
         <div> <input id="email" type="text" name="email" placeholder="Email"/></div>
       </div>
       <div> <textarea id="message" name="message" placeholder="Message"/></div>
       <button>Send</button>
     </form>
     </>
  )
}

