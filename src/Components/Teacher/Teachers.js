import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Teacherr from '../Teacherr/Teacherr';
import './Teacher.css';

const Teachers = () => {
    const [teachers,SetTecher] = useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data => SetTecher(data));
    },[]);
    return (
        <div className="teacher py-5">
                <Container>
                      <h4 className="skill">Skilled & Qualified</h4>
                      <h2 className="teachers"> Meet the Teachers</h2>
                      <Row xs={1} md={3} className="g-4 py-5">
                         {teachers.map(teacher => <Teacherr teacher={teacher} key={teacher.index}></Teacherr>)}
                      </Row>     
                </Container>
        </div>
    );
};

export default Teachers;