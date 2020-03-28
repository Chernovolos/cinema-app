import React from "react";
import {Switch, Route} from "react-router";
import MainPage from "./MainPage";
import Header from "./Header";

class Layout extends React.Component {

    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route exact path="/" component={MainPage}/>
                </Switch>
            </>
        );
    }
}

export default Layout;