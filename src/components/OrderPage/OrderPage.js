import React, { useEffect, useState, useContext } from 'react';
import './OrderPage.css';
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const OrderPage = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/serviceOrders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    console.log(orders);
    return (
        <div className="home order-details mt-5">
            <Container>
                <Row>
                    <table className="product-form table table-stripped mt-5">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Order Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Order Status</th>
                        </tr>
                    </thead>
                    
                    {orders.map(orders => 
                        <tbody>
                            <tr>
                                <td >{orders.userName}</td>
                                <td>{orders.userEmail}</td>
                                <td>{orders.name}</td>
                                <td>$ {orders.price}</td>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Order Status</option>
                                        <option value="1">Pending</option>
                                        <option value="2">Processing</option>
                                        <option value="3">Delivered</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    )}
                    </table>
                </Row>
            </Container>
        </div>
    );
};

export default OrderPage;