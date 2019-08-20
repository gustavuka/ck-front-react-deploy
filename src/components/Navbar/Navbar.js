import React from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
    return (
        <div className="container">
            <nav
                className="navbar navbar-expand-lg navbar-light bg-white border-bottom pb-0"
                id="navborder"
            >
                <div className="container">
                    <button
                        className="navbar-toggler mr-auto"
                        id="specific"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapse_target"
                        aria-controls="nabarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span>
                            <img src={menu} alt="menu" />
                        </span>
                    </button>
                    <a className="navbar-brand pb-1" id="navlogo" href="#">
                        <img src={logo} alt="logo" />
                    </a>
                    <div
                        className="collapse navbar-collapse"
                        id="collapse_target"
                    >
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item px-lg-2">
                                <a className="nav-link" href="#">
                                    POLITICS
                                </a>
                            </li>
                            <li className="nav-item px-lg-2">
                                <a className="nav-link" href="#">
                                    BUSINESS{" "}
                                </a>
                            </li>
                            <li className="nav-item px-lg-2">
                                <a className="nav-link" href="#">
                                    TECH
                                </a>
                            </li>
                            <li className="nav-item px-lg-2">
                                <a className="nav-link" href="#">
                                    SCIENCE
                                </a>
                            </li>
                            <li className="nav-item px-lg-2">
                                <a className="nav-link" href="#">
                                    SPORTS
                                </a>
                            </li>
                            <li className="nav-item pl-lg-4">
                                <a className="nav-link" id="login" href="#">
                                    LOGIN
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;