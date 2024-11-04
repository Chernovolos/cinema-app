import React from "react";
import { Button, Modal } from "react-bootstrap";

const ModalFeedback = ({ show, onClose, feedbackResponse }) => {
    if (!show) return null;

    return (
        <Modal show={show} centered size="md" className="border-light" onHide={onClose}>
            <Modal.Body className="p-0" border="light">
                <div className="feedback-modal-container ticket-modal-container">
                    <h1 className="feedback-modal-title-greeting ticket-modal-title-greeting">
                        Thank you, {feedbackResponse.name}!
                    </h1>
                    <h2 className="feedback-modal-title ticket-modal-title">
                        Your feedback has been received.
                    </h2>
                    <p className="feedback-modal-subtitle">
                        Response number:
                        <span className="feedback-modal-response-number ticket-modal-subtitle">
                            #{feedbackResponse.responseNumber}
                        </span>
                    </p>
                    <p className="feedback-modal-info ticket-modal-subtitle">
                        * We have received your message and will get back to you shortly via email:
                        <span className="feedback-modal-email"> {feedbackResponse.email}</span>
                    </p>
                    <div className="feedback-modal-container-button">
                        <Button onClick={onClose} className="my-btn feedback-modal-button ticket-modal-button">
                            Close
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalFeedback;
