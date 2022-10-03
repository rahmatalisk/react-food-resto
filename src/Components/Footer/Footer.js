import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="content">
                    <span>Locations</span>
                    <div className="link-group">
                        <a href="#japan">India</a>
                        <a href="#japan">Japan</a>
                        <a href="#japan">Russia</a>
                        <a href="#japan">USA</a>
                        <a href="#japan">France</a>
                    </div>
                </div>
                <div className="content">
                    <span>Quick Links</span>
                    <div className="link-group">
                        <a href="#japan">Home</a>
                        <a href="#japan">Dishes</a>
                        <a href="#japan">About</a>
                        <a href="#japan">Contact</a>
                        <a href="#japan">Review</a>
                        <a href="#japan">Order</a>
                    </div>
                </div>
                <div className="content">
                    <span>Contact Info</span>
                    <div className="link-group">
                        <a href="#japan">+08812345678</a>
                        <a href="#japan">+1478</a>
                        <a href="#japan">resto@gmail.com</a>
                        <a href="#japan">abc@gmail.com</a>
                        <a href="#japan">Dhaka,Bangladesh</a>
                    </div>
                </div>
                <div className="content">
                    <span>Follow Us</span>
                    <div className="link-group">
                        <a href="#japan">Facebook</a>
                        <a href="#japan">Twitter</a>
                        <a href="#japan">Instagram</a>
                        <a href="#japan">Linkedin</a>
                        
                    </div>
                </div>
            </div>
            <p>Copyright @ 2022 By <span>Rahmat Ali</span></p>
            
        </div>
    );
};

export default Footer;