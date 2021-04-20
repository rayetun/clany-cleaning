import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './SingleService.css'

const SingleService = (props) => {

    const {imageURL, name, color, price, _id} = props.services;
    const history = useHistory();
    const handleFlower = () => {
        history.push(`/checkout/${_id}`);
    }
    return (
        <div className="col-md-4">
            <Link to={`/checkout/${_id}`} onClick={handleFlower} className="single-service-box">
                <div className="service-box-bg" style={{ backgroundImage: `url(${imageURL})`}}>
                    <h4>$ {price}</h4>
                </div>
                <h2>{name}</h2>
            </Link>
        </div>
    );
};

export default SingleService;