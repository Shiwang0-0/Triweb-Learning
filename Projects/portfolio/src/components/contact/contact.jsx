import './contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
export const Contact=()=>{
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( process.env.REACT_APP_YOUR_SERVICE_ID ,  process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          alert("Form Submitted");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    };
    return(  
        <div>
            <div className='contactText'>Contact Me</div>
            <div className='contactSection'>
                <div className='contactMe'>
                <form ref={form} onSubmit={sendEmail} className='contactForm'>
                    <input type="text" className="name" name='userName' placeholder='Your Name' />
                    <input type="email" className="email" placeholder='Your Email' name='userEmail'/>
                    <textarea className='textArea' name="message" rows="5" placeholder='Enter your message'></textarea>
                    <button type='submit' value='Send' className="submitButton">Submit</button>
                </form>
                </div>
            </div>
        </div> 
    )
}

