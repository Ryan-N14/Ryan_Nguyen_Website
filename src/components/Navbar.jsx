import React, { useState } from "react";
import './Navbar.css';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    return (
        <>
        <nav className="desktop-nav">
            <div className="name-logo">Ryan Nguyen</div>
            <div>
                <ul className="nav-link">
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
        <nav className="mobile-nav">
            <div className="name-logo">Ryan Nguyen</div>
            <div className="hamburger-menu">
                <div className={`hamburger-icon ${menuOpen ? "open" : ""}`} onClick={handleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={`mobile-links ${menuOpen ? "open" : ""}`}>
                    <li><a href="#about">About Me</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#project">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar