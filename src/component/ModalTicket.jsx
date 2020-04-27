import React from "react";
import {Button, Modal} from "react-bootstrap";
import sortBy from "lodash/sortBy";

export default class ModalTicket extends React.Component {

    render() {
        let { show, onClose, serverAnswer} = this.props;

        if (show) {
            let totalCost = 0;
            return(
                <Modal show={show} centered size="md" className="border-light" onHide={()=>{}}>
                    <Modal.Body className="p-0" border="light">
                        <div className="ticket-modal-container">
                            <h1  className="ticket-modal-title-greeting">{serverAnswer.firstName} <span className="ticket-modal-subtitle-greeting">, спасибо за покупку билета!</span></h1>
                            <h2 className="ticket-modal-title">
                                Номер заказа:
                                <span className="ticket-modal-subtitle">  #{serverAnswer.orderNumber}</span>
                            </h2>
                            <div>
                                <div className="ticket-modal-border-total-cost mt-3"/>
                                <h3 className="ticket-modal-title">Фильм:</h3>
                                <p className="ticket-modal-subtitle"> {serverAnswer.film.title}</p>
                                <h4 className="ticket-modal-subtitle">Желтый зал</h4>
                                <div className="ticket-modal-container-place">
                                    <p className="ticket-modal-place-title">Места:</p>
                                    {
                                        sortBy(serverAnswer.places, place => place.row).map((place) => {
                                            let {id, number, price, row} = place;
                                            totalCost += price;
                                            return (
                                                <div key={id}>
                                                    <span className="ticket-modal-place-subtitle">{row} </span>
                                                    <span className="ticket-modal-place-title">ряд</span>
                                                    <span className="ticket-modal-place-subtitle"> {number} </span>
                                                    <span className="ticket-modal-place-title">место</span>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="ticket-modal-border-total-cost"/>
                                <div className="ticket-modal-wrapper-total-cost">
                                    <div className="ticket-modal-container-total-cost">
                                        <p className="ticket-modal-title-total-cost">
                                            Общая стоимость:
                                        </p>
                                    </div>
                                    <div className="ticket-modal-container-total-cost">
                                        <p className="ticket-modal-total-cost"> {totalCost} грн</p>
                                    </div>
                                </div>
                                <p className="ticket-modal-info-title">
                                    * Информация о заказе была выслана на указанный вами e-mail
                                    <span className="ticket-modal-info-subtitle"> {serverAnswer.email}. </span>
                                    <br/>
                                    Оплата в кассе по номеру заказа:
                                    <span className="ticket-modal-info-subtitle"> #{serverAnswer.orderNumber}</span>
                                </p>
                                <div className="ticket-modal-container-button">
                                    <Button onClick={onClose} className="my-btn ticket-modal-button">закрыть</Button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )
        } else {
            return <></>;
        }

    }
}