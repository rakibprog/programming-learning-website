import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import about from '../../images/about.jpg';

const About = () => {
    return (
        <div className="about-us py-5">
          <Container>
              <Row>
                  <Col lg={12} className="text-center">
                      <div className="about-us">
                         <h4 className="about-title">About Programming Learning</h4>
                         <h2 className="about-heading">The Best Global Experts</h2>
                         <p className="about-descrition">There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour words which don’t look even slightly believable. Lorem Ipsn gravida nibh vel velit auctor aliquetn auci elit cons.</p>
                      </div>
                  </Col>
                  <Col lg={12}>
                      <div className="about-image">
                          <img className="img-fluid mt-2" src={about} alt="" />
                      </div>
                  </Col>
              </Row>
          </Container>
        </div>
    );
};

export default About;