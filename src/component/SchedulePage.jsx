import React from "react";
import {connect} from "react-redux";
import CinemaDay from "./CinemaDay";
import {getCinemaDays, setFilm} from "../actions/filmActions";
import moment from "moment/min/moment-with-locales";


class SchedulePage extends React.Component {
    componentDidMount() {
        this.props.initialize({films: this.props.films});
    }

    handleFilmClick = (film) => {
        this.props.setFilm(film);
        this.props.history.push({pathname: `/films/${film.id}`});
    };

    render() {
        let {cinemaDays} = this.props;
        return(
            <div className="container">
                <section className="section">
                    {/* map cinemaDays */}
                    {
                        cinemaDays.map(({date, films}, i) => {
                            let momentDate = moment(date);
                            momentDate.locale('ru');
                            return (
                                <CinemaDay key={i} dateTitle={momentDate.format("DD MMMM")} films={films} onFilmClick={this.handleFilmClick}/>
                            )
                        })
                    }
                </section>
            </div>
        );
    }
}


export default connect(
    state => ({
        films: state.app.films,
        cinemaDays: state.schedulePage.cinemaDays
    }),
    (dispatch) => ({
        initialize: (films) => dispatch(getCinemaDays(films)),
        setFilm: (film) => dispatch(setFilm(film))
    })
)(SchedulePage);