'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './styles/ContactForm.module.css'; // Import your CSS module

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus('Email sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('Error sending email.');
    }
  };

  return (
    
    <div className="flex justify-center items-center min-h-screen py-6 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className={`${styles.form} flex flex-col space-y-4 max-w-md w-full`}>
        <h2 className="text-xl font-bold mb-4 text-white">Send us a message :</h2>
        {status && <p className="text-white mb-4">{status}</p>}
        <div>
          <label htmlFor="name" className="text-white text-xl">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`${styles.input} w-full px-4 py-2 border rounded-md`}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-white text-xl">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`${styles.input} w-full px-4 py-2 border rounded-md`}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-white text-xl">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={`${styles.textarea} w-full px-4 py-2 border rounded-md`}
          />
        </div>
        <button type="submit" className="bg-[#751904] hover:bg-[#4c1303] text-white text-xl py-2 px-4 rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
