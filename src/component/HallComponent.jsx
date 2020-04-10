import React from "react";
import {PLACE_STATUS} from "../models/place";
import some from "lodash/some";

class HallComponent extends React.Component {
    state = {
        chosenPlaces: []
    };

    handleClickPlace = (placeClicked) => {
        if (placeClicked.status === PLACE_STATUS.FREE) {
            let { chosenPlaces } = this.state;
            let placesWithoutClicked = chosenPlaces.filter(item => item.id !== placeClicked.id);

            if (placesWithoutClicked.length === chosenPlaces.length) {
                this.setState({
                    ...this.state,
                    chosenPlaces: [...chosenPlaces, placeClicked]
                }, this.handleSelectPlace);

            } else  {
                this.setState({...this.state, chosenPlaces: placesWithoutClicked}, this.handleSelectPlace);
            }
        }
    };

    handleSelectPlace = () => {
        this.props.onSelectPlace(this.state.chosenPlaces);
    };

    render() {
        const { hall } = this.props;
        const { chosenPlaces } = this.state;
        return (
            <div className="hall-container">
                <div className="hall-title">
                    <h4>{hall.name}</h4>
                </div>
                <div className="hall-container-screen">
                    <div className="hall-screen"/>
                </div>
                {
                    hall.rows.map((row) => {
                        let {id, number, places} = row;
                        return (
                            <div key={id} className="hall-place-wrapper">
                                <div className="place-row">
                                    <span className="place-row-number">{number}</span>
                                </div>
                                {
                                    places.map((place) => {
                                        let {id, number, status, price} = place;
                                        let isSelected = some(chosenPlaces, {id: place.id});
                                        let statusClass = "";

                                        if ( isSelected ) {
                                            statusClass = "place-chosen";
                                        } else if ( status === PLACE_STATUS.FREE ) {
                                            statusClass = "place-free";
                                        } else if ( status === PLACE_STATUS.HIDDEN ) {
                                            statusClass = "place-hidden"
                                        } else if ( status === PLACE_STATUS.RESERVED ) {
                                            statusClass = "place-reserved"
                                        }

                                        return (
                                            <div key={id} onClick={() => this.handleClickPlace(place)}>
                                                <div className={"place " + statusClass}>
                                                    <span>{number}</span>
                                                    <span>{price}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                             </div>
                        )
                    })
                }
                <div className="hall-container-description">
                    <div className="place-wrapper-description">
                        <div className="place-description place-reserved"/>
                        <span>зарезервированное место</span>
                    </div>
                    <div className="place-wrapper-description">
                        <div className="place-description place-chosen"/>
                        <span>выбранное место</span>
                    </div>
                    <div className="place-wrapper-description">
                        <div className="place-description place-free"/>
                        <span>свободное место</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default HallComponent;
