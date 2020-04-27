import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router'
import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/images/logo.png"


class Header extends React.Component {

    render() {
        let {location} = this.props;
        return(
            <div className="header-container">
                <div className="container">
                    <header className="header">
                        <Navbar collapseOnSelect expand="lg p-0">
                            <Navbar.Brand>
                                <Link to="/" className="logo">
                                  <img src={logo} className="logo"/>
                                </Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="nav-toggle responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                                <Nav>
                                    <Nav.Item className="nav-list ">
                                        <Link to="/"
                                              data-name="Home"
                                              className={`nav-item ${location.pathname === "/"? "is-active": ""}`}>
                                            Главная
                                        </Link>
                                    </Nav.Item>
                                    <Nav.Item className="nav-list">
                                        <Link to="/schedule"
                                              data-name="Movie Schedule"
                                              className={`nav-item ${location.pathname === "/schedule"? "is-active": ""}`}>
                                            Расписание
                                        </Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </header>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);