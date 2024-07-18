// components/ContactForm.tsx

'use client';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<string | null>(null);

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.status === 200) {
        setStatus('Email sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Error sending email. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Error sending email. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} className="flex flex-col space-y-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-2">Send us a message :</h2>
        {status && <p>{status}</p>}
        <p>
          <label htmlFor="name" className="text-xl">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md bg-[#b44e0f]"
          />
        </p>
        <p>
          <label htmlFor="email" className="text-xl">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-md bg-[#b44e0f]"
          />
        </p>
        <p>
          <label htmlFor="message" className="text-xl">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border rounded-md bg-[#b44e0f]"
          />
        </p>
        <p>
          <button className="bg-[#751904] hover:bg-[#4c1303] text-white text-xl py-2 px-4 rounded-md">
            Submit
          </button>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
