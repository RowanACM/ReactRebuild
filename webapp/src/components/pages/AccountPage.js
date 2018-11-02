
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import CommitteesList from './committees/CommitteesList';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import AccountHome from './account/home';




export default class AccountPage extends React.Component {
    constructor(props) {
        super(props);
        

    }
  
    render() {


        return (
        this.props.user?<AccountHome user={this.props.user} uid={this.props.uid} accessToken={this.props.accessToken} isAdmin={this.props.isAdmin}/>:null
        );


    }
}


