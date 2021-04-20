import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import './DeleteService.css'


const DeleteService = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://radiant-stream-26422.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    const deleteService = (id) => {
        const url =`https://radiant-stream-26422.herokuapp.com/delete/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log("Please Delete It")
        })
    }
    return (
        <div className="home">
            <Container className="special-bg">
                <Row>
                    <table className="table table-stripped">
                    <thead>
                        <tr>
                        <th scope="col">Service Name</th>
                        <th scope="col">Service Price</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {services.map(services => 
                    <tbody>
                        <tr>
                            <td className="special-td">{services.name}</td>
                            <td>{services.price}</td>
                            <Button onClick={() => deleteService(services._id)}>Delete</Button>
                        </tr>
                    </tbody>
                    )}
                    </table>
                </Row>
            </Container>
        </div>
    );
};

export default DeleteService;