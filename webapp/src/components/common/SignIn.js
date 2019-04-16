
import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Navigation from "../header/Navigation";
import Jumbotron from "./Jumbotron";
import GoogleSignIn from "../GoogleSignIn"
import {GoogleLogout} from "react-google-login";
import Cookies from "universal-cookie";

const defaultRedirect = "/account";

const cookies = new Cookies();

export default class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.user = props.user;
        this.redirect = props.redirect ? props.redirect : defaultRedirect;

    }
  
    render() {

        if (cookies.get("token")) {

            return <Redirect to={this.redirect}/>

        }

        return (
            <div>

                <Jumbotron title={"Sign in"}/>

                <div className={"container"} style={{padding: "30px"}}>

                    <div className={"card"}>

                        <div className={"card-header primary"}><h1>Sign in</h1></div>

                        <div className={"row p-3"}>

                            <div className={"col-4"} style={{borderRight: "solid lightgrey 1px", display: "flex", alignItems: "center", justifyContent: "middle"}}>

                                <GoogleSignIn redirect={this.redirect}/>

                            </div>

                            <div className={"col-8"}>
                                <p>At this time you must use an account affiliated with Rowan University.</p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        );


    }
}


