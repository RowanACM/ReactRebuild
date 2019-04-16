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

import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            isAdmin: this.props.isAdmin,
            adminLink: null
        };
    }

    componentDidMount() {



        let xml = new XMLHttpRequest();

        let onload = r => {

            let res = JSON.parse(xml.response);
            if (res.isAdmin) {

                let link = (
                    <NavItem>
                        <Link to='/Admin'><NavLink>Admin</NavLink></Link>
                    </NavItem>
                );

                this.setState({adminLink: link})
            }

        };

        onload = onload.bind(this);

        xml.open("POST", "/tokensignin");
        xml.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xml.onload = onload;

        xml.send(JSON.stringify({
            verify: true,
            idToken: cookies.get("token")
        }));

    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
           
                
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/" ><img src="./acmLogo.jpg" height={"50px"} width={"50px"} alt={""}/>RowanACM</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to='/'><NavLink >Home</NavLink></Link>
                                </NavItem>

                                <NavItem>
                                    <Link to="/Committees"><NavLink >Committees</NavLink></Link>
                                </NavItem>
                                <NavItem>
                                    <NavLink href={"https://rowanacm.slack.com"}>Slack</NavLink>
                                </NavItem>
                                {this.state.adminLink}
                                {!this.props.user?
                                <NavItem>
                                    <Link to={"/signin"}><NavLink>Sign In</NavLink></Link>
                                </NavItem>
                                :
                                <NavItem>
                                        <Link to='/Account'><NavLink>Account</NavLink></Link>
                                    </NavItem>
                                }
                                
                            </Nav>
                        </Collapse>
                    </Navbar>

        );
    }
}
