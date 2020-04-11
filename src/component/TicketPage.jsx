import React, {useState} from "react";
import { connect } from "react-redux";
import HallComponent from "./HallComponent";
import {Col, Row} from "react-bootstrap";
import TicketForm from "./TicketForm";
import film from "../models/film";
import { buyTicket } from "../actions/ticketActions";
import Preloader from "./Preloader";
import ModalTicket from "../component/ModalTicket";


class TicketPage extends React.Component {
    state = {
        places: [],
        title: {},
    };

    onClose = () => {
        this.props.history.push({pathname: "/"});
    };

    handleSelectPlaces = (places) => {
        this.setState({...this.state, places});
    };

    handleBuyTickets = (formValues) => {
        let ticket = {...formValues, places: this.state.places, film: this.props.film};
        this.props.buyTicket(ticket);
    };

    render() {
        const {filmHall, preloader, isTicketBought, serverAnswer} = this.props;
        const {places} = this.state;
        return (
            <div className="section section-hall">
                <div className="container">
                    <Row>
                        <Col sm={12} md={12} xl={9}>
                            <HallComponent hall={filmHall} onSelectPlace={this.handleSelectPlaces}/>
                            <Preloader show={preloader}/>
                        </Col>
                        <Col xs={12} sm={7} md={6} xl={3}>
                            <TicketForm onSubmit={this.handleBuyTickets} isBtnDisabled={!places.length}/>
                        </Col>
                    </Row>
                </div>
                <ModalTicket show={isTicketBought} serverAnswer={serverAnswer} onClose={this.onClose}/>
            </div>
        );
    }
}

export default connect(
    state => ({
        film: state.filmPage.film,
        preloader: state.ticketPage.preloader,
        filmHall: state.ticketPage.hall,
        isTicketBought: state.ticketPage.isTicketBought,
        serverAnswer: state.ticketPage.serverAnswer
    }),
    (dispatch) => ({
        buyTicket: (ticket) => dispatch(buyTicket(ticket)),
    })
)(TicketPage);