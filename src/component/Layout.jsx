import React from "react";
import {Switch, Route} from "react-router";
import MainPage from "./MainPage";
import Header from "./Header";
import FilmPage from "./FilmPage";
import TicketPage from "./TicketPage";

class Layout extends React.Component {

    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/films/:id" component={FilmPage}/>
                    <Route path="/buy-tickets" component={TicketPage}/>
                </Switch>
            </>
        );
    }
}

export default Layout;