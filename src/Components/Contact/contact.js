import React, { useRef } from 'react'
import linkedinImg from '../../Assets/linkedin.png'; 
import githubIcon from '../../Assets/Githublogo.png';  
import instagramImg from '../../Assets/instagram.png';  
import mailImg from '../../Assets/mail.png'; 
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6i2cnyd', 'template_nxljper', form.current, {
        publicKey: 'AdH6FDC_BeWlp8dP4',
      })
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div className='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                <input type='text' className='email' placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Send</button>
            </form>
            <div className='links'>
              <a href='https://www.linkedin.com/in/shreyesh-naik-9686a318b/'>
                <img src={linkedinImg} alt='linkedin' className='link' />
                </a>
                <a href='https://github.com/naik1601'>
                <img src={githubIcon} alt='github' className='link' />
                </a>
                <a href='https://www.instagram.com/shreyeshnaik?igsh=MTI2ZWg2aGdvam9zcg%3D%3D&utm_source=qr'>
                <img src={instagramImg} alt='instagram' className='link' />
                </a>
                
            </div>
        </div>
    </section>
  )
}

export default Contact;
