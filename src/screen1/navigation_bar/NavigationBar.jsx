import React from 'react';
import  "./NavigationBar.css";

import logo from "../images/logo.png"
const NavigationBar = () => {
  return (
    <nav className='navbar ms-auto'>
        <div className="container">
            <div className="navbar__container">
            <ul className="navbar__left">
                <div className="navbar__left-logo">
                    <img src={logo} alt='logo'/>
                </div>
            </ul>
            <ul className="navbar__right">
                <li><a href=''>Home</a></li>
                <li><a href=''>About</a></li>
                <li><a href=''>Services</a></li>
                <li><a href=''>Gallery</a></li>
                <li><a href=''>Our Team</a></li>
                <li><a href=''>News</a></li>
               
                <li><a href=''>Contact</a></li>
            </ul>
            </div>
        </div>
        </nav>
  )
}

export default NavigationBar