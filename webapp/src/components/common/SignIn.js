
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

                <div className={"container-fluid"}>

                    <div className={"row p-3"}>

                        <div className={"col-sm"}>
                            <div className={"card"}>
                                <div className={"card-header primary"}><h1>Sign In</h1></div>
                                <div className={"card-body"}>

                                    <form action={this.redirect}>

                                        <p>Enter your Rowan credentials</p>
                                        <div className={"form-group"}>

                                            <input className={"form-control"} type={"email"} placeholder={"Email"}/>
                                        </div>
                                        <div className={"form-group"}>
                                            <input className={"form-control"} type={"password"} placeholder={"Password"}/>
                                        </div>
                                            <button className={"btn btn-primary primary"}>Sign In</button>

                                    </form>

                                </div>

                            </div>
                        </div>

                        <div className={"col-sm"}>
                            <div className={"card"}>
                                <div className={"card-header primary"}><h1>Login with social account</h1></div>
                                <GoogleSignIn redirect={this.redirect}/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );


    }
}


