import React from 'react';
import { Button, Container, Row} from 'react-bootstrap';
import "./HeroArea.css"

const HeroArea = () => {

    return (
        <div className="hero-area d-flex align-items-center">
            <Container>
                <Row>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="hero-title">
                                    <h2>Need Cleaning?<br></br> Don't Panic!</h2>
                                    <p>We understand that people are different and so are their cleaning requirements.</p>
                                    <Button>Contact Us</Button>
                                    <Button className="second-btn">Get a Quote</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default HeroArea;