import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <Header></Header>
            <div className="backgroud-img">
                <Row className="height-custom">
                    <Col>
                        <h1>Know More About Us</h1>
                    </Col>
                    <Col>
                        <h4>When we play it safe, we sabotage our chance to make our mark in a memorable, authentic way. Health care organizations confront pressures to provide more responsive, personal care with cost efficiency, striving to provide the industry’s “patient-centered care” goal. However, when every hospital system and specialty clinic cautiously claims to provide “patient-centered care”— because all of their competitors claim to provide “patient-centered care”—their claim becomes so safe that they disappear into the din of their competitors’ identical claims</h4>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AboutUs;