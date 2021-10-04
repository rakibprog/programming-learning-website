
import React from 'react';
import { Card, Col,Button} from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
    const {service,price,img,teacher} = props.service;
    return (
        <Col className=" d-flex align-items-stretch ">
            <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                <Card.Title className="service">{service}</Card.Title>
                <Card.Text className="text-center">
                    <h6 className="price">Price: ${price}</h6>
                    <h6 className="teacher">Teacher: {teacher}</h6>
                    <Button variant="primary text-center mt-2">Enroll Now</Button>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>  
    );
};

export default Service;