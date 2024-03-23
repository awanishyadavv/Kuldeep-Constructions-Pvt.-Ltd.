import React from 'react'
import './Contact.css'
import Footer from '../../components/footer/Footer'
import LadyEngineer from '../../asstes/female-engineer.png'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w7mgg4s', 'template_thj209s', form.current, 'rx6y0AkK9raQsRsbB')
      .then((result) => {
          // console.log(result.text);
          alert("Email sent successfully!");
      }, (error) => {
          // console.log(error.text);
          alert("FAILED!"+error);
      });

      e.target.reset();
  };

  return (
    <div className='contact-container'>
      <div className='Contact-heading'><h1>Contact us</h1></div>
      <div className='contact-container-mask'>
        <div className='contact-engineer'> <img src={LadyEngineer} alt="" /></div>
        <div className='contact-forms'> 
        <form className='contact-form' ref={form} onSubmit={sendEmail}>
          <input className='contact-input' type="text" name='name' placeholder='Your Full Name' required/>
          <input className='contact-input' type="text" name='email' placeholder='Your Email' required/>
          <input className='contact-input' type="text" name='subject' placeholder='Enter Subject' required/>
          <textarea className='contact-input' type="text" name='message'  rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary contact-submit-btn'>Send Message</button>
        </form>
        </div>
      </div>
      <div className='contact-footer'>
        <Footer/> 
      </div>
    </div>
  )
}

export default Contact