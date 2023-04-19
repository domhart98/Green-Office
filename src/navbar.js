import React, {useState} from 'react'
import './navbar.css'
import Link from './link.js'

const Navbar = ({collapsed, hamActive, toggleCollapsibleNavbar}) => {

    return(
        <div id="navbar-container">
           
            <div id="navbar">
                <div id="nav-brand">
                    <Link href="/">
                        <img src={require("./images/green-office-logo.png")} alt=""/>
                    </Link>
                </div>
            </div>
            
            <div className={collapsed ? "hidden" : "show"} id="nav-menu"  onClick={toggleCollapsibleNavbar}>
                <Link className="nav-link" href="/">
                    <img src={require("./images/home-icon.png")} alt=""/><p>HOME</p>
                </Link>
                <Link className="nav-link" href="/about">
                    <img src={require("./images/about-icon.png")} alt=""/><p>ABOUT</p>
                </Link>
                <Link className="nav-link" href="/contact">
                    <img src={require("./images/phone-icon.png")} alt=""/><p>CONTACT</p>
                </Link>
                <Link className="nav-link" href="/projects">
                    <img src={require("./images/catalogue-icon.png")} alt=""/><p>PROJECTS</p>
                </Link>
                <Link className="nav-link" href="/gallery">
                    <img src={require("./images/camera-icon.png")} alt=""/><p>GALLERY</p>
                </Link>
            </div>
            <div id="toggler-container"> 
                <button className="navbar-toggler-custom" type="button" onClick={toggleCollapsibleNavbar} data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <div className={`hamburger-menu ${hamActive ? "ham-active" : "" }`}>
                        <div className="ham-bar bar-top"></div>
                        <div className="ham-bar bar-mid"></div>
                        <div className="ham-bar bar-bottom"></div>
                    </div>
                </button>
            </div>
            
        </div>
    )
}
export default Navbar;





