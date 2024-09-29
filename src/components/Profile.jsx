import React from 'react'
import './Profile.css';

const Profile = () => {
    return (
        <section className='profile'>
                <div className='section-profile-img'>
                    <img src="images/Circle_photo-Photoroom.png" alt="" />
                </div>
                <div className='profile_text'>
                    <p className='text_p1'>Hello, I'm</p>
                    <h1 className='title'>Ryan Nguyen</h1>
                    <p className='text_p2'>Full-stack Developer</p>
                    <div className='button_container'>
                        <button className='btn1'>Download CV</button>
                        <button className='btn2'>Contact Info</button>
                    </div>
                </div>
        </section>
    )
}

export default Profile