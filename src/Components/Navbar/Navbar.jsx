import React from "react";
import { Link } from "react-scroll"; // import Link từ react-scroll
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="nav-menu">
                <li><Link to="Home" smooth={true} duration={500} offset={-70}>Home</Link></li>
                <li><Link to="About" smooth={true} duration={500} offset={-70}>About Me</Link></li>
                <li><Link to="Services" smooth={true} duration={500} offset={-70}>Services</Link></li>
                <li><Link to="MyWork" smooth={true} duration={500} offset={-70}>MyWork</Link></li>
                <li><Link to="Contact" smooth={true} duration={500} offset={-70}>Contact</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
