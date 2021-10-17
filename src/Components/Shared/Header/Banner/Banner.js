import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css";

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid"
                        src="https://i.ibb.co/XSfHM1B/brain-study-background-mental-health-care-medical-technology-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>We Believe Only Doctor can teach how to Love life</h2>
                        <p>Let us be the ones who say we do not accept that a child dies every three seconds simply because he does not have the drugs you and I have</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/xqC8h48/flat-lay-health-still-life-arrangement-with-copy-space.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>The road to health is paved with good intestines!</h2>
                        <p>Medicine can cure diseases, But only Doctors can cure patients.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/BjtC5Mw/young-handsome-physician-medical-robe-with-stethoscope.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>The road to health is paved with good intestines!</h2>
                        <p>There are only two sorts of doctors: those who practice with their brains, and those who practice with their tongues.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;


