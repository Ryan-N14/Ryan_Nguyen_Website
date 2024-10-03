import React from 'react';
import './Contact.css'



const Contact = () => {
    return(
        <section className='contact' id='contact'>
            <p className='title2'>Get in Touch</p>
            <h1 className='title'>Contact Me</h1>
            <div className='info-upper-container'>
                <div className='info-container'>
                    <div><img src="images/email.png" alt="" className='contact-icon'/></div>
                    <p><a href="mailto:nguyenryan142002@gmail.com">nguyenryan142002@gmail.com</a></p>
                </div>
                <div className='info-container'>
                    <div><img src="images/linkedin.png" alt="" className='contact-icon'/></div>
                    <p><a href="https://linkedin.com/in/ryan-nguyen-629774239">LinkedIn</a></p>
                </div>
            </div>
        </section>
    )
}

export default Contact;