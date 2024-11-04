import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button, Row, Col, ListGroup } from "react-bootstrap";
import { sendFeedback } from "../actions/formActions";

import Preloader from "./Preloader";
import ModalFeedback from "./ModalFeedback";

const ContactPage = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const feedbackResponse = useSelector((state) => state.feedbackSlice.response);
    const feedbackStatus = useSelector((state) => state.feedbackSlice.status);
    const preloader = useSelector((state) => state.feedbackSlice.preloader);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(sendFeedback(formData));
        setShowModal(true);
        setFormData({ name: "", email: "", message: "" });
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container>
            <Row>
                <Container className="d-flex align-items-center my-4">
                    <div className="orange-line"></div>
                    <h2 className="text-uppercase header-text ms-3">Contact Form</h2>
                </Container>
                <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage" className="mt-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Your message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="my-btn ticket-form-btn mt-4 mb-4"
                            disabled={feedbackStatus === 'loading'}
                        >
                            Send
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <ListGroup>
                        <ListGroup.Item className="card-feedback card-feedback-page">
                            "Your Feedback Matters to Us!"<br />
                            Thank you for taking the time to reach out. Your thoughts and
                            feedback are incredibly valuable to us, and we strive to ensure
                            the best experience for every client. <br/>
                            +38 (095) xxx-xx-xx<br/>
                            +38 (063) xxx-xx-xx<br/>
                            +38 (097) xxx-xx-xx
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            {preloader ? (
                <Preloader show={preloader} />
            ) : (
                <>
                    <ModalFeedback
                        show={showModal}
                        onClose={handleCloseModal}
                        feedbackResponse={feedbackResponse}
                    />
                </>
            )}
        </Container>
    );
};

export default ContactPage;
