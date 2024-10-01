import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className='about'>
            <p className='title2'>Get to know me more!</p>
            <h1 className='title'>About me</h1>


            <div className='section-container'>
                <div className='img-container'>
                    <img 
                    src="images/personalImage.png" 
                    alt="About section pic" 
                    className='about-pic'/>
                </div>
                
                <div className='about-detail-container'>
                    <div className='about-container'>
                        <div className='detail-container'>
                            <img src="images/experience.png" alt="Experience icon" className='icon'/> 
                            <h3>Experience</h3>
                            <p>0+ year<br /> Recently graduated </p> 
                        </div>
                        <div className='detail-container'>
                            <img src="images/education.png" alt="" className='icon'/>
                            <h3>Education</h3>
                            <p>B.A Computer Science <br /> B.S Biology</p>
                        </div>
                        
                    </div>
                    <div className='text-container'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, architecto aspernatur ex quis impedit necessitatibus nemo est fugiat unde ad magnam obcaecati non consequuntur vitae similique. Ipsum dolorem optio ad.</p>
                        </div>
                </div>
                
            </div>  
        </section>
    )
}

export default About;