
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import CommitteesList from './committees/CommitteesList';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AccountHome from './account/home';
import {Redirect} from "react-router";
import Cookies from "universal-cookie";


const cookies = new Cookies();

export default class AccountPage extends React.Component {
    constructor(props) {
        super(props);
        

    }
  
    render() {

        if (!cookies.get("token")) {
            return <Redirect to={"/signIn"}/>
        }

        return (
        this.props.user?<AccountHome user={this.props.user} uid={this.props.uid} accessToken={this.props.accessToken} isAdmin={this.props.isAdmin}/>:null
        );


    }
}


