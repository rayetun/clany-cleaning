import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import SingleReview from '../SingleReview/SingleReview';
import "./Review.css"

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://radiant-stream-26422.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className="review-area">
            <Container>
                <Row>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h2>What People Say About Us</h2>
                                    <div className="section-border">
                                        <span></span>
                                        <span className="black-border"></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clint-testimonial">
                            <div class="row">
                                {
                                    reviews.map(reviews =>
                                        <SingleReview reviews={reviews}></SingleReview>)
                                }
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Review;