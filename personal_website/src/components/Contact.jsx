import React from 'react'
import emailjs from '@emailjs/browser'

export default function Contact(){
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_53fit8u', '', e.target, import.meta.env.VITE_EMAIL_PUBLIC_KEY);
    }

    return(
        <div className='contact-section'>
            <h1>Contact</h1>
            <div className='contact-content'>
                <form onSubmit={sendEmail}>
                    <div className='input-box'>
                        <label htmlFor='name'>Full Name</label>
                        <input type="text" name='name' className='input-field' placeholder='Your name' required/>
                    </div>
                    <div className='input-box'>
                        <label htmlFor='email'>Email Address</label>
                        <input type="email" name='email' className='input-field' placeholder='Email address' required/>
                    </div>
                    <div className='input-box'>
                        <label htmlFor='message'>Message</label>
                        <textarea name="message" id="message" className='message-field' cols={30} rows={5} placeholder='Message...' required></textarea>
                    </div>
                    <button type='submit' className='contact-submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    );
}