
import React, { Component } from 'react';

import '../../../App.css';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Cookies from "universal-cookie";
import SignIn from "../../common/SignIn";
import GoogleSignIn from "../../GoogleSignIn";
import AccountCard from "./AccountCard";
import {Redirect} from "react-router";
const cookies = new Cookies();

export default class AccountHome extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            user:props.user,
            committees:[],
            joinedCommittees:[],
            memberId:-1,
            firstName:"",
            lastName:"",
            phone:"",
            bio:"",
            slack:"",
            github:"",
            pictureUrl:"",
            page: "Loading..."
        }

    }

    componentDidMount() {

        let xml = new XMLHttpRequest();
        xml.open("POST", "/tokensignin");
        xml.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

        let onload = r => {

            let res = JSON.parse(xml.response);

            let page = (

                <AccountCard name={res.name} email={res.email} desc={res.desc} picture={res.picture} isAdmin={res.isAdmin}/>

            );

            this.setState({page: page});

        };

        onload = onload.bind(this);
        xml.onload = onload;

        xml.send(JSON.stringify({
            info: true,
            idToken: cookies.get("token")
        }));

    }

    render() {

        return (

            this.state.page

        )

        // console.log(this.state.page);
        //
        // return (
        //     <div>{this.state.page}</div>
        // )

    }

}


