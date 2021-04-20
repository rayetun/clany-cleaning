import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  faFacebookF, faTwitter, faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h3>Clany</h3>
                            <p>We are the leading cleaning service provider in Recusandae expedita eos cupiditate vitae, ipsum corporis, dolorum</p>
                            <div className="social-links">
                                <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Our Services</a></li>
                                <li><a href="">Portfolio</a></li>
                                <li><a href="">Our Blog</a></li>
                                <li><a href="">Shop</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="">Apartment Cleaning</a></li>
                                <li><a href="">Building Cleaning</a></li>
                                <li><a href="">Wooden Floor Cleaning</a></li>
                                <li><a href="">Glass Cleaning</a></li>
                                <li><a href="">Office Cleaning</a></li>
                                <li><a href="">Vehicle Cleaning</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-widget footer-newsletter-form">
                        <h3>subscribe our newsletter</h3>
                            <form action="">
                                <input type="email" placeholder="Your Mail"/>
                                <input type="submit" value="Send"/>
                            </form>
                        <p>Subscribe to our newsletter, consectetur adipiscing elit. Nam et lorem a turpis interdum fringilla.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;