import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white p-3">
            <h2 className="p-3">- Get in touch with us -</h2>
            <Row >
                <Col>
                    <h4>EMERGENCY CARE</h4>
                    <p>Clinical excellence must be the priority for any health care service provider.</p>
                    <button className="btn btn-outline-light"> +(714) 556-3171</button>
                </Col>
                <Col>
                    <h4>CHAMBER SERVICES</h4>
                    <p>Create a strong and lasting first impression on your potential clients with Mediplus.</p>
                    <button className="btn btn-outline-light">Make an Appointment</button>
                </Col>
                <Col>
                    <h4>HOSPITALITY</h4>
                    <p>17361 Newhope Street Fountain Valley, CA 92708, Phone: (714) 556-3171 Fax: (714) 907657</p>
                    <button className="btn btn-outline-light">Apply For a Bed</button>
                </Col>
            </Row>
            <br />
            <br />
            <p>Copyright © 2021 Lifeline Health Care, All Rights Reserved</p>
        </div>
    );
};

export default Footer;