import React from "react";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";
import MainPage from "./MainPage";
import Header from "./Header";
import FilmPage from "./FilmPage";
import TicketPage from "./TicketPage";
import SchedulePage from "./SchedulePage";
import Preloader from "./Preloader";
import { getCurrentFilms } from "../actions/filmActions";

class Layout extends React.Component {

    componentDidMount() {
        this.props.initialize();
    }

    render() {
        const { preloader } = this.props;
        return (
            <>
                <Header/>
                <Preloader show={preloader}/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/films/:id" component={FilmPage}/>
                    <Route path="/buy-tickets" component={TicketPage}/>
                    <Route path="/schedule" component={SchedulePage}/>
                </Switch>
            </>
        );
    }
}

export default connect(
    state => ({
        preloader: state.app.preloader,
    }),
    dispatch => ({
        initialize: () => dispatch(getCurrentFilms())
    })
)(Layout);