
import React, { Component } from 'react';
import '../../../App.css';
import AccountHome from './home';
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
        this.props.user?<AccountHome self={true} user={this.props.user} uid={this.props.uid} accessToken={this.props.accessToken} isAdmin={this.props.isAdmin}/>:null
        );


    }
}


