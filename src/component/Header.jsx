import React from "react";
import { Link } from "react-router-dom";
import {withRouter} from 'react-router'


class Header extends React.Component {

    render() {
        let {location} = this.props;
        return(
            <div className="header-container">
                <div className="container">
                    <header className="header">
                        <div>
                            <Link to="/" className="logo">Logo</Link>
                        </div>
                        <nav className="nav nav-list">
                            <Link to="/" data-name="Home"
                                  className={`nav-item ${location.pathname === "/"? "is-active": ""}`}>
                                Home
                            </Link>
                            <Link to="/schedule"
                                  data-name="Movie Schedule"
                                  className={`nav-item ${location.pathname === "/schedule"? "is-active": ""}`}>
                                Movie Schedule
                            </Link>
                        </nav>
                    </header>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);