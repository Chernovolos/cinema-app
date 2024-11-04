import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p>
                            We are dedicated to bringing you the latest in movies, reviews, and entertainment news.
                            Follow us to stay updated!
                        </p>
                    </Col>
                    <Col md={4}>
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/about" className="text-white">About</a></li>
                            <li><a href="/contact" className="text-white">Contact</a></li>
                            <li><a href="/privacy" className="text-white">Privacy Policy</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5>Follow Us</h5>
                        <div>
                            <a href="https://facebook.com" className="text-white me-3"><FaFacebook size={24} /></a>
                            <a href="https://twitter.com" className="text-white me-3"><FaTwitter size={24} /></a>
                            <a href="https://instagram.com" className="text-white"><FaInstagram size={24} /></a>
                        </div>
                    </Col>
                </Row>
                <hr className="bg-light" />
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">© {new Date().getFullYear()} Project cinema. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
