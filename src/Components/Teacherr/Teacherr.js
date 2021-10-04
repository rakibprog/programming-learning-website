import React from 'react';
import { Card,Button,Col } from 'react-bootstrap';

const Teacherr = (props) => {
    const {img,teacher,designation} = props.teacher;
    return (
        <Col className=" d-flex align-items-stretch ">
            <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                <Card.Title className="service">{teacher}</Card.Title>
                <Card.Text className="text-center">
                    <h6 className="teacher">{designation}</h6>
                    <Button variant="primary text-center mt-2">Contact Us</Button>
                </Card.Text>
                </Card.Body>
            </Card>
        </Col>  
    );
};

export default Teacherr;