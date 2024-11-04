import React from "react";
import { Button, Modal } from "react-bootstrap";
import sortBy from "lodash/sortBy";

const ModalTicket = ({ show, onClose, serverAnswer }) => {
    if (!show) return null;

    let totalCost = serverAnswer.places.reduce((sum, place) => sum + place.price, 0);

    return (
        <Modal show={show} centered size="md" className="border-light" onHide={() => {}}>
            <Modal.Body className="p-0" border="light">
                <div className="ticket-modal-container">
                    <h1 className="ticket-modal-title-greeting">
                        {serverAnswer.firstName}
                        <span className="ticket-modal-subtitle-greeting">, thank you for purchasing the ticket</span>
                    </h1>
                    <h2 className="ticket-modal-title">
                        Order number:
                        <span className="ticket-modal-subtitle"> #{serverAnswer.orderNumber}</span>
                    </h2>
                    <div>
                        <div className="ticket-modal-border-total-cost mt-3" />
                        <h3 className="ticket-modal-title">Film:</h3>
                        <p className="ticket-modal-subtitle"> {serverAnswer.film.title}</p>
                        <h4 className="ticket-modal-subtitle">Yellow Hall</h4>
                        <div className="ticket-modal-container-place">
                            <p className="ticket-modal-place-title">Places:</p>
                            {sortBy(serverAnswer.places, (place) => place.row).map((place) => (
                                <div key={place.id}>
                                    <span className="ticket-modal-place-subtitle">{place.row} </span>
                                    <span className="ticket-modal-place-title">row</span>
                                    <span className="ticket-modal-place-subtitle"> {place.number} </span>
                                    <span className="ticket-modal-place-title">place</span>
                                </div>
                            ))}
                        </div>
                        <div className="ticket-modal-border-total-cost" />
                        <div className="ticket-modal-wrapper-total-cost">
                            <div className="ticket-modal-container-total-cost">
                                <p className="ticket-modal-title-total-cost">Total cost:</p>
                            </div>
                            <div className="ticket-modal-container-total-cost">
                                <p className="ticket-modal-total-cost"> {totalCost} UAH</p>
                            </div>
                        </div>
                        <p className="ticket-modal-info-title">
                            * Order information has been sent to the e-mail you provided.
                            <span className="ticket-modal-info-subtitle"> {serverAnswer.email}. </span>
                            <br />
                            Payment at the checkout using the order number:
                            <span className="ticket-modal-info-subtitle"> #{serverAnswer.orderNumber}</span>
                        </p>
                        <div className="ticket-modal-container-button">
                            <Button onClick={onClose} className="my-btn ticket-modal-button">
                                close
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalTicket;
