/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Twt from './twt'
import { Tweet } from 'react-tweet';


export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ob40029', 'template_0mj8ln5', form.current, {
        publicKey: 'fyZOGxUM5u02wT9cD',
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
    <div id='contacto'>
    <section id="contact" className=" py-5 bg-gray-50">
    
    <div className="container mx-auto">

      <h2  className="text-2xl font-medium text-center mb-8">Contact Us</h2>
      
      <form className="max-w-lg mx-auto px-8 py-6 rounded-lg bg-white shadow-lg">
      
        <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
        
        <div className="mb-4">
          <label 
            className="text-gray-600 font-bold block mb-2"
            htmlFor="name"
          >
            Name
          </label>
          
          <input 
            className="w-full border border-gray-400 p-2 rounded-lg"  
            type="text" 
            id="name"
          />
        </div>

        <div className="mb-4">
          <label
            className="text-gray-600 font-bold block mb-2"  
            htmlFor="email"  
          >
            Email
          </label>
          
          <input
            className="w-full border border-gray-400 p-2 rounded-lg" 
            type="email"
            id="email" 
          />
        </div>

        <div className="mb-4">
          <label
            className="text-gray-600 font-bold block mb-2"
            htmlFor="message"
          >
            Message
          </label>
          
          <textarea 
            className="w-full border border-gray-400 p-2 rounded-lg"  
            rows="4"
            id="message"
          ></textarea>
        </div>

        <button
          className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
        >
          Send Message
        </button>
      
      </form>
      <div className="max-w-lg mx-auto px-8 mt-0 tweet-container"> 
        <Tweet 
          className="tweet"
          id="1758650837176356925" 
        />
      </div>

      <div className="contact-form">
        {/* Formulario aquí */}
      </div>

    </div>

    

  </section>
  </div>
  );
};
export default Email;