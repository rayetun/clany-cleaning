import React from 'react';
import "./TeamMember.css";
import teamOne from "../../images/Team-1.jpg";
import teamThree from "../../images/Team-3.jpg";
import teamTwo from "../../images/Team-2.jpg";
import teamFour from "../../images/Team-4.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebookF, faTwitter, faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons';


const TeamMember = () => {
    return (
        <div className="team-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Our Team</h2>
                            <div className="section-border">
                                <span></span>
                                <span className="black-border"></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="single-member">
                            <img src={teamOne} alt="Team"/>
                            <div className="member-social-links">
                                <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                            <h4>Angelina Jolie<span>Dept Head</span></h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-member">
                            <img src={teamThree} alt="Team"/>
                            <div className="member-social-links">
                                <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                            <h4>Brad Pitt<span>Supervisor</span></h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-member">
                            <img src={teamTwo} alt="Team"/>
                            <div className="member-social-links">
                                <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                            <h4>Nataliia Portman<span>Assistant</span></h4>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="single-member">
                            <img src={teamFour} alt="Team"/>
                            <div className="member-social-links">
                                <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href=""><FontAwesomeIcon icon={faLinkedin} /></a>
                            </div>
                            <h4>Ema Watson<span>Assistant</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;