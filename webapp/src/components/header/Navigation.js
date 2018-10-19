import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CommitteesPage from "../pages/CommitteesPage";
import HomePage from "../pages/HomePage";

export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/" ><img src="./acmLogo.jpg" height={"50px"} width={"50px"} alt={""}/>RowanACM</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <Link to={"/"}>
                                    <NavItem>
                                        <NavLink href="/">Home</NavLink>
                                    </NavItem>
                                </Link>
                                <Link to={"/Committees"}>
                                    <NavItem>
                                        <NavLink href="/">Committees</NavLink>
                                    </NavItem>
                                </Link>
                                {(this.state.isAdmin === true)?
                                <Link to={"/Committees"}>
                                    <NavItem>
                                        <NavLink href="/Admin">Admin</NavLink>
                                    </NavItem>
                                </Link>
                                    :null}

                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </Router>
        );
    }
}
