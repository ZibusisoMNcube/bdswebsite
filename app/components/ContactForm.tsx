// components/ContactForm.tsx
'use client'
import React from 'react';

const ContactForm: React.FC = () => {
  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
        
    <form onSubmit={handleOnSubmit} className="flex flex-col space-y-4 max-w-md mx-auto">
    <h2 className="text-xl font-bold mb-2">send us a message :</h2>
      <p>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" className="w-full px-4 py-2 border rounded-md bg-[#b44e0f]" />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" className="w-full px-4 py-2 border rounded-md bg-[#b44e0f]" />
      </p>
      <p>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" className="w-full px-4 py-2 border rounded-md bg-[#b44e0f]" />
      </p>
      <p>
        <button className="bg-[#751904] hover:bg-[#4c1303] text-white py-2 px-4 rounded-md">Submit</button>
      </p>
    </form>
    </div>
  );
};

export default ContactForm;
