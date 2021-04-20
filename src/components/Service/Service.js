import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import SingleService from '../SingleService/SingleService';
import "./Service.css"
const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="home service-area">
            <Container>
                <Row>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title">
                                    <h2>Our Services</h2>
                                    <div className="section-border">
                                        <span></span>
                                        <span className="black-border"></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                services.map(services =>
                                    <SingleService services={services}></SingleService>)
                            }
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Service;