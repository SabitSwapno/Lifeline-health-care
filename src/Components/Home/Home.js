import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Home.css';


const Home = () => {
    const iconFa = <FontAwesomeIcon icon={faStar} />
    const icona = <FontAwesomeIcon icon={faStarHalf} />
    return (
        <>

            <div id="home">
                <Header></Header>
                <div className="home-bg">
                    <h2 className="py-3 text-white fw-bolder">The best Pharmacy shop</h2>
                    <Row>
                        <Col className="custom-ul-bg">
                            <h5 className="">Available items</h5>
                            <ul>
                                <li>Tablets</li>
                                <li>Syrups</li>
                                <li>Inhalers</li>
                                <li>All Sprays</li>
                                <li>Vaccine</li>
                                <li>Etc</li>
                            </ul>
                            <h5>Deliveries</h5>
                            <ol>
                                <li>Take Aways</li>
                                <li>Home Deliveries</li>
                                <li>+09090997754</li>
                            </ol>
                        </Col>
                        <Col>
                            <img className="img-fluid" src="https://thumbs.dreamstime.com/b/pharmacy-interior-blurred-background-58416047.jpg" alt="" />
                        </Col>
                    </Row>
                </div>
                <Services></Services>
                <div className="home-bg">
                    <h2 className="py-3 text-white fw-bolder">Some of Our Service Holders</h2>
                    <CardGroup className="pb-5">
                        <Card className="card-fixed-bg">
                            <Card.Img className="img-fluid p-3" variant="top" src="https://i.ibb.co/mFTc002/bohemian-man-with-his-arms-crossed-1.jpg" />
                            <Card.Body>
                                <Card.Title>Mr Johnson</Card.Title>
                                <Card.Text>
                                    This clinic is a life saver. Their ambulance services are the best without any doubts. I recommend everyone this clinic.
                                </Card.Text>
                                <Card.Text>
                                    I gave {iconFa} {iconFa} {iconFa} {iconFa} {iconFa}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last released 3 months ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="card-fixed-bg">
                            <Card.Img className="img-fluid p-3" variant="top" src="https://i.ibb.co/HdMxs34/garep-1.jpg" />
                            <Card.Body>
                                <Card.Title>Mr Garep Saxena</Card.Title>
                                <Card.Text>
                                    Hospitals environment aren't just like other ones.So clean and soothing, Feels like home.
                                </Card.Text>
                                <Card.Text>
                                    {iconFa} {iconFa} {iconFa} {iconFa} {icona} For me
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last released 9 months ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="card-fixed-bg">
                            <Card.Img className="img-fluid p-3" variant="top" src="https://i.ibb.co/qpwFMxL/girl-1.jpg" />
                            <Card.Body>
                                <Card.Title>Ms Anila</Card.Title>
                                <Card.Text>
                                    This hospitals facilities are beyond the level. The Pediatric Care services are one of the best in the town.My child is recovering fast.
                                </Card.Text>
                                <Card.Text>
                                    {iconFa} {iconFa} {iconFa} {iconFa} {iconFa} for me
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last released 3 days ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
                <Footer></Footer>
            </div>

        </>
    );
};

export default Home;


