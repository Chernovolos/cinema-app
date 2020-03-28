import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeLink: "Home"
        }
    };

    createActiveLink = (event) => {
        event.preventDefault();
        event.target.getAttribute("data-name");
        this.setState({
            activeLink: event.target.getAttribute("data-name")
        })
    };

    render() {
        return(
            <div className="header-container">
                <div className="container">
                    <header className="header">
                        <div>
                            <Link to="/" className="logo">Logo</Link>
                        </div>
                        <nav className="nav">
                            <ul className="nav-list">
                                <li>
                                    <Link to="/" data-name="Home"
                                        onClick={this.createActiveLink}
                                       className={`nav-item ${this.state.activeLink === "Home"? "is-active": ""}`}>Home
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span/>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" data-name="Movie Schedule"
                                       onClick={this.createActiveLink}
                                       className={`nav-item ${this.state.activeLink === "Movie Schedule"? "is-active": ""}`}>Movie Schedule
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span/>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>
        );
    }
}

export default Header;