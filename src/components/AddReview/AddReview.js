import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Accordion from 'react-bootstrap/Accordion'
import './AddReview.css'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';



function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
    return (
      <button onClick={decoratedOnClick}>
        {children}
      </button>
    );
}
const AddReview = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            desc: data.description,
        };
        const url =`http://localhost:8000/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(res => console.log("Review Added"));
    };
    
    return (
        <div className="product-form">
            <h3>Write a review</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                Your Name:
                    <input name="name" defaultValue="" ref={register} />
                </label>
                <label>
                Your Review:
                    <input name="description" defaultValue="" ref={register} />
                </label>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddReview;