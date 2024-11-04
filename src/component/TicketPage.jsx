import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";

import Preloader from "./Preloader";
import TicketForm from "./TicketForm";
import HallComponent from "./HallComponent";
import ModalTicket from "../component/ModalTicket";
import { buyTicket } from "../actions/ticketActions";
import { clearTicketPage } from "../reducers/ticketPageReducer.js";

const TicketPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [places, setPlaces] = useState([]);

    const filmHall = useSelector((state) => state.ticketPage.hall);
    const preloader = useSelector((state) => state.ticketPage.preloader);
    const isTicketBought = useSelector((state) => state.ticketPage.isTicketBought);
    const serverAnswer = useSelector((state) => state.ticketPage.serverAnswer);
    const filmData = useSelector((state) => state.filmDetails.film);

    // Handlers
    const handleSelectPlaces = (selectedPlaces) => {
        setPlaces(selectedPlaces);
    };

    const handleBuyTickets = (formValues) => {
        const ticket = { ...formValues, places, film: filmData };
        dispatch(buyTicket(ticket));
    };

    const onClose = () => {
        navigate("/");
        dispatch(clearTicketPage());
    };

    return (
        <>
            <Container className="d-flex align-items-center my-4">
                <div className="orange-line"></div>
                <h2 className="text-uppercase header-text ms-3">Ticket Page</h2>
            </Container>
            <div className="section section-hall">
                <div className="container">
                    <Row>
                        {preloader ? (
                            <Preloader show={preloader} />
                        ) : (
                            <>
                                <Col sm={12} md={12} xl={9}>
                                    <HallComponent hall={filmHall} onSelectPlace={handleSelectPlaces} />
                                </Col>
                                <Col xs={12} sm={7} md={6} xl={3}>
                                    <TicketForm onSubmit={handleBuyTickets} isBtnDisabled={!places.length} />
                                </Col>
                            </>
                        )}
                    </Row>
                </div>
                <ModalTicket show={isTicketBought} serverAnswer={serverAnswer} onClose={onClose} />
            </div>
        </>
    );
};

export default TicketPage;
