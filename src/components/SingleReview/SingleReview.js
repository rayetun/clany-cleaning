import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import './SingleReview.css'

const SingleReview = (props) => {

    const {name, desc} = props.reviews;
    
    return (
        <div className="col-md-4">
            <div class="single-testimonial-item">
                <div className="row">
                    <div className="col-md-2 text-center">
                        <div className="quote-icon">
                        <a><FontAwesomeIcon icon={faQuoteRight} /></a>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="review-info">
                            <p>{ desc }</p>
                            <a><FontAwesomeIcon icon={faStar} /></a>
                            <a><FontAwesomeIcon icon={faStar} /></a>
                            <a><FontAwesomeIcon icon={faStar} /></a>
                            <a><FontAwesomeIcon icon={faStar} /></a>
                            <a><FontAwesomeIcon icon={faStar} /></a>
                            <h4>{ name }</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;