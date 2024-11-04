import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/images/logo.png";
const Header = () => {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => setExpanded(!expanded);
    const closeNav = () => setExpanded(false);

    return (
        <div className="header-container">
            <div className="container">
                <header className="header">
                    <Navbar collapseOnSelect expand="lg p-0" fixed="top" expanded={expanded}>
                        <Navbar.Brand>
                            <Link to="/" className="logo">
                                <img src={logo} alt="logo" className="logo" />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleToggle}/>
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                            <Nav>
                                <Nav.Item className="nav-list">
                                    <Link
                                        to="/"
                                        data-name="Home"
                                        className={`nav-item ${location.pathname === "/" ? "is-active" : ""}`}
                                        onClick={closeNav}
                                    >
                                        Home
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className="nav-list">
                                    <Link
                                        to="/films"
                                        data-name="Actions"
                                        className={`nav-item ${location.pathname === "/films" ? "is-active" : ""}`}
                                        onClick={closeNav}
                                    >
                                        Films
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className="nav-list">
                                    <Link
                                        to="/about"
                                        data-name="About us"
                                        className={`nav-item ${location.pathname === "/about" ? "is-active" : ""}`}
                                        onClick={closeNav}
                                    >
                                        About us
                                    </Link>
                                </Nav.Item>
                                <Nav.Item className="nav-list">
                                    <Link
                                        to="/privacy"
                                        data-name="Rules"
                                        className={`nav-item ${location.pathname === "/privacy" ? "is-active" : ""}`}
                                        onClick={closeNav}
                                    >
                                        Privacy Policy
                                    </Link>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </header>
            </div>
        </div>
    );
};

export default Header;
