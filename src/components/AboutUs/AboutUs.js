import React from 'react';
import "./AboutUs.css";
import aboutImage from "../../images/about-us.jpg";

const AboutUs = () => {
    return (
        <div className="about-us-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title">
                        <h2>Why Choose Us</h2>
                        <div className="section-border">
                            <span></span>
                            <span className="black-border"></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="single-service-item">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="service-bordered-img service-img-1"></div>
                            </div>
                            <div className="col-md-9">
                                <h3>Guranted word</h3>
                                <p>Duis autem vel eum iriure dolor in hendreit in vulputate nulle aminve esse molestie consequa tidolore eu feugiat faces.</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-service-item">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="service-bordered-img service-img-2"></div>
                            </div>
                            <div className="col-md-9">
                                <h3>Expert worker</h3>
                                <p>Duis autem vel eum iriure dolor in hendreit in vulputate nulle aminve esse molestie consequa tidolore eu feugiat faces.</p>
                            </div>
                        </div>
                    </div>
                    <div className="single-service-item">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="service-bordered-img service-img-3"></div>
                            </div>
                            <div className="col-md-9">
                                <h3>24/7 support</h3>
                                <p>Duis autem vel eum iriure dolor in hendreit in vulputate nulle aminve esse molestie consequa tidolore eu feugiat faces.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="big-service-img"></div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutUs;