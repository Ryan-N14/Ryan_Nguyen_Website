import React from 'react'
import './Profile.css';

const Profile = () => {
    const openPDF = () => {
        window.open("/Nguyen_Resume.pdf")
    }

    return (
        <section className='profile' id='profile'>
                <div className='section-profile-img'>
                    <img src="images/Circle_photo-Photoroom.png" alt="" />
                </div>
                <div className='profile_text'>
                    <p className='text_p1'>Hello, I'm</p>
                    <h1 className='title'>Ryan Nguyen</h1>
                    <p className='text_p2'>Full-stack Developer</p>
                    <div className='button_container'>
                        <button onClick={openPDF} className='btn1'>Download CV</button>
                        <a href="#contact"><button className='btn2'>Contact Info</button></a>
                    </div>
                    <div className='social-container'>
                        <a href="http://linkedin.com/in/ryan-nguyen-629774239" target="_blank" rel="noopener noreferrer">
                            <img src="images/linkedin.png" alt="Linked-in Icon" className='social-icon'/>
                        </a>

                        <a href="https://github.com/Ryan-N14" target="_blank" rel="noopener noreferrer">
                            <img src="images/github.png" alt="Github Icon" className='social-icon'/>
                        </a>
                        
                    </div>
                </div>
        </section>
    )
}

export default Profile