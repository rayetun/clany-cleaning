import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Accordion from 'react-bootstrap/Accordion'
import './AddService.css'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import axios from 'axios';
import AddReview from '../AddReview/AddReview';
import DeleteProduct from '../DeleteProduct/DeleteProduct';



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
const AddService = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
        const serviceData = {
            name: data.title,
            desc: data.description,
            price: data.price,
            imageURL: imageURL
        };
        const url =`http://localhost:8000/addServices`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
        .then(res => console.log("Server Side Data"));
    };
    
    const handleImageUpload = event =>{
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key','d86b185b5ff5c245876c15a169be7770');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (response) {
            setImageURL(response.data.data.display_url);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    return (
        <Accordion defaultActiveKey="0">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="admin-menu">
                            <h3>Fabulous Flower</h3>
                            <ul>
                                <li><CustomToggle eventKey="0">Add Service</CustomToggle></li>
                                <li><CustomToggle eventKey="1">Add Review</CustomToggle></li>
                                <li><CustomToggle eventKey="2">Manage Service</CustomToggle></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                    <Accordion.Collapse eventKey="0">
                        <div className="product-form">
                            <h3>Add New Flower</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>
                                Service Title:
                                    <input name="title" defaultValue="" ref={register} />
                                </label>
                                <label>
                                Service Description:
                                    <input name="description" defaultValue="" ref={register} />
                                </label>
                                <label>
                                Service Price:
                                    <input name="price" defaultValue="" ref={register} />
                                </label>
                                <label>
                                Service Image:
                                    <input name="image" type="file" onChange={handleImageUpload}/>
                                </label>
                                    <input type="submit" />
                            </form>
                        </div>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="1">
                        <AddReview></AddReview>
                    </Accordion.Collapse>
                    <Accordion.Collapse eventKey="2">
                        <DeleteProduct></DeleteProduct>
                    </Accordion.Collapse>
                    </div>
                </div> 
            </div>
            
    </Accordion>
    );
};

export default AddService;