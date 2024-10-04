import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className='about' id='about'>
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
                    <div className='skill-container'>
                        <div className='about-container'>
                            <div className='detail-container'>
                                <h2 className='skill_text'>Technical Skills</h2>
                                <div className='article-container'>
                                    <article>
                                        <img src="images/check.png" alt="check mark" className='check-mark' />
                                        <div>
                                            <h3>Java</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src="images/check.png" alt="check mark" className='check-mark' />
                                        <div>
                                            <h3>HTML</h3>
                                            <p>Experience</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src="images/check.png" alt="check mark" className='check-mark' />
                                        <div>
                                            <h3>Javascript</h3>
                                            <p>Experience</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src="images/check.png" alt="check mark" className='check-mark' />
                                        <div>
                                            <h3>CSS</h3>
                                            <p>Experience</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src="images/check.png" alt="check mark" className='check-mark' />
                                        <div>
                                            <h3>Python</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src="images/check.png" alt="check mark" className='check-mark' />
                                        <div>
                                            <h3>React JS</h3>
                                            <p>Beginner</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src="images/check.png" alt="check mark" className='check-mark' />
                                        <div>
                                            <h3>Next.js</h3>
                                            <p>Beginner</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src="images/check.png" alt="check mark" className='check-mark' />
                                        <div>
                                            <h3>Express JS</h3>
                                            <p>Beginner</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src="images/check.png" alt="check mark" className='check-mark' />
                                        <div>
                                            <h3>mySQL</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src="images/check.png" alt="check mark" className='check-mark' />
                                        <div>
                                            <h3>jQuery</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </article>
                                    <article>
                                        <img src="images/check.png" alt="check mark" className='check-mark' />
                                        <div>
                                            <h3>Git</h3>
                                            <p>Intermediate</p>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>  
        </section>
    )
}

export default About;