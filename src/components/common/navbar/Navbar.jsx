import React from "react";
import './Navbar.css'

function Navbar () {
    return (
        <section className="navbar">
            <a href="/" className="navbar-item">Home</a>
            <a href="/contact" className="navbar-item">Contact Us</a>
            <a href="/class" className="navbar-item">Classes</a>
        </section>
    )
}

export default Navbar;
