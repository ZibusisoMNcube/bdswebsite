'use client'
import React from 'react'


export default function ContactForm() {

  async function handleOnSubmit(e) {
    e.preventDefault();

   
  }

  return (
    <form onSubmit={handleOnSubmit}>
    <p>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" name="name" />
    </p>
    <p>
      <label htmlFor="email">Email</label>
      <input id="email" type="text" name="email" />
    </p>
    <p>
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
    </p>
    <p>
      <button>Submit</button>
    </p>
  </form>
  )
}
