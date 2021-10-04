import React from 'react';
import banner from '../../images/banner.jpg';
import './Banner.css';
import students from '../../images/students.jpg';
import { Container,Row,Col,Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${banner})` }}> 
            <div className="blur">
                <Container className="h-100">
                    <Row className="h-100">
                        <Col lg={6}>
                            <div className="banner-content d-flex align-items-center">
                                <div className="banner-cont">
                                <h1> <span className="learn">Learn</span> new things daily </h1>
                                <p>Lorem ipsum is simply dummy text of the printing and typesetting industry with dummmy text. Graphics, Designing, Branding, Development</p>
                                <Button variant="primary">Learn More</Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="d-flex align-items-center">
                            <div className="img-content ">
                                <img src={students} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;