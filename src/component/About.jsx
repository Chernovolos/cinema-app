import React from "react";
import {Col, Row, Card, CardGroup, Container} from "react-bootstrap";

import Image from 'react-bootstrap/Image';
import myImage from '../assets/images/img_3.png';
import personImage from '../assets/images/fallback-film-poster.jpg';
import EMPLOYEES_DATA from "../models/employ";
import logo_1 from "../assets/images/brand&logo/Envato.png";
import logo_2 from "../assets/images/brand&logo/Microlancer_copy.png";
import logo_3 from "../assets/images/brand&logo/Tuts+.png";
import logo_4 from "../assets/images/brand&logo/WordPress.png";

const About = () => {
    // const logos = [
    //     { src: '../assets/images/brand&logo/Envato.png', alt: 'Envato' },
    //     { src: '../assets/images/brand&logo/WordPress.png', alt: 'WordPress' },
    //     { src: '../assets/images/brand&logo/Tuts+.png', alt: 'Tuts+' },
    //     { src: '../assets/images/brand&logo/Microlancer_copy.png', alt: 'Microlancer' }
    // ];
    return (
        <>
            <section className="section section-main-page image-container">
                <Image src={myImage}  fluid className="image"/>
                <div className="overlay">
                    <h2>ABOUT US</h2>
                </div>
            </section>
            <div className="container">
                <section className="section">
                    <Container className="d-flex align-items-center my-4">
                        <div className="orange-line"></div>
                        <h2 className="text-uppercase header-text ms-3">Network of cinemas "PROJECT CINEMA"</h2>
                    </Container>
                    <CardGroup>
                        <Card className="card-about card-about-page">
                            <Card.Body>
                                <Card.Text>
                                    From now on, the "PROJECT CINEMA" cinema is equipped with new modern equipment:
                                    state-of-the-art BARCO (Belgium) projector, 4 kW lamp,
                                    screen with a silver coating (SILVER SPEKTRO 3.3) with a light reflection coefficient of 3.3 (Korea),
                                    3D system (Japan), which works in combination with a screen and a projector, which will allow you to immerse yourself in the world of 3D reality.
                                    Sound system: JBLcinema professional.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card-about card-about-page">
                            <Card.Body>
                                <Card.Text>
                                    DOLBY DIGITAL Surround EX presence effects.<br/>
                                    We also have:<br/>
                                    Original design.<br/>
                                    Soft chairs.<br/>
                                    Silent air conditioners.<br/>
                                    4 types of the most delicious popcorn.<br/>
                                    Also, of course, the best world film masterpieces and the hospitality of
                                    your native cinema await you.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </section>
                <section className="section">
                    <Container className="d-flex align-items-center my-4">
                        <div className="orange-line"></div>
                        <h2 className="text-uppercase header-text ms-3">Our team</h2>
                    </Container>
                    <Row xs={1} md={3} className="g-4">
                        {EMPLOYEES_DATA.map(employee => (
                            <Col key={employee.id} >
                                <Card className="card-about card-about-page text-center">
                                    <Card.Img variant="top" src={personImage} className="card-img-page mx-auto mt-3 mb-3" />
                                    <Card.Body>
                                        <Card.Title>{employee.name}</Card.Title>
                                        <Card.Text>{employee.description}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="card-about-page">
                                        <small className="card-about-text">{employee.position}</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </section>
                <section className="section">
                    <Container className="d-flex align-items-center my-4">
                        <div className="orange-line"></div>
                        <h2 className="text-uppercase header-text ms-3">Our partners</h2>
                    </Container>
                    <Container className="my-4">
                        <Row className="justify-content-between">
                            <Col  xs={12} sm={6} md={3} lg={2} xl={3} className="pb-3 pb-md-0">
                                <a href="/" className="d-inline-block">
                                    <Image src={logo_1}  alt="logo_1"/>
                                </a>
                            </Col>
                            <Col  xs={12} sm={6} md={3} lg={2} xl={3} className="pb-3 pb-md-0">
                                <a href="/" className="d-inline-block">
                                    <Image src={logo_2}  alt="logo_2"/>
                                </a>
                            </Col>
                            <Col  xs={12} sm={6} md={3} lg={2} xl={3} className="pb-3 pb-md-0">
                                <a href="/" className="d-inline-block">
                                    <Image src={logo_3}  alt="logo_3"/>
                                </a>
                            </Col>
                            <Col  xs={12} sm={6} md={3} lg={2} xl={3} className="pb-3 pb-md-0">
                                <a href="/" className="d-inline-block">
                                    <Image src={logo_4}  alt="logo_4"/>
                                </a>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </div>
        </>
    );
};

export default About;