import React from "react";
import "../assets/myStyle/header.scss";
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
                            <a href="#" className="logo">Logo</a>
                        </div>
                        <nav className="nav">
                            <ul className="nav-list">
                                <li>
                                    <a href="#" data-name="Home"
                                        onClick={this.createActiveLink}
                                       className={`nav-item ${this.state.activeLink === "Home"? "is-active": ""}`}>Home
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-name="Movie Schedule"
                                       onClick={this.createActiveLink}
                                       className={`nav-item ${this.state.activeLink === "Movie Schedule"? "is-active": ""}`}>Movie Schedule
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span/>
                                    </a>
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