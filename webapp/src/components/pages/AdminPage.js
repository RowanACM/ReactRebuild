
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import AnnouncementForm from './admin/AnnouncementForm';
import MemberForm from './admin/MemberForm';
import CommitteeForm from './admin/CommitteeForm';
import Cookies from "universal-cookie";
import {Redirect} from "react-router-dom";
import Page403 from "./error/400/Page403";
import SignIn from "../common/SignIn";

const cookies = new Cookies();

export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.subpages={
            announcement:0,
            member:1,
            committee:2
        };
        
        this.state={
            activePage:this.subpages.announcement,
            adminUid:this.props.adminUid,
            adminToken:this.props.adminToken,
            user:this.props.user,
            isAdmin:this.props.isAdmin,
            page: "",
            html: ""
        };

    }
    renderAnnouncementForm(){
        return <div><AnnouncementForm idToken={cookies.get("token")} adminUid={this.props.adminUid} adminToken={this.props.adminToken}/></div>;
    }
    renderMemberForm(){
        return <MemberForm adminUid={this.props.adminUid} adminToken={this.props.adminToken}/>;
    }

    componentWillMount() {

        let c = cookies.get("token");

        if (!c) { // User is not signed in
            return <SignIn redirect={"/Admin"}/>
        }

        let xml = new XMLHttpRequest();

        let onload = r => {

            let res = JSON.parse(xml.response);

            let page;

            if (res["isAdmin"]) { // Render page

                let html;
                switch (this.state.activePage) {
                    case this.subpages.announcement:
                        html = this.renderAnnouncementForm();
                        break;
                    case this.subpages.member:
                        html = this.renderMemberForm();
                        break;
                    case this.subpages.committee:
                        html = <CommitteeForm adminUid={this.props.adminUid} adminToken={this.props.adminToken}/>;
                }
                var style = {cursor: "pointer"};

                this.setState({html: this.renderAnnouncementForm()});

                page = (
                    <div>
                        {this.props.user != null && this.props.isAdmin == 1 || true ?
                            <div>
                                <ul class="nav nav-tabs">
                                    <li class="nav-item">
                                        <a class={this.state.activePage == this.subpages.announcement ? "nav-link active" : "nav-link"}
                                           onClick={() => {
                                               this.setState({activePage: this.subpages.announcement});
                                               this.setState({html: this.renderAnnouncementForm()});
                                           }} style={style}>Add Announcement</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class={this.state.activePage == this.subpages.member ? "nav-link active" : "nav-link"}
                                           onClick={() => {
                                               this.setState({activePage: this.subpages.member});
                                               this.setState({html: this.renderMemberForm()});
                                           }} style={style}>Edit Member</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class={this.state.activePage == this.subpages.committee ? "nav-link active" : "nav-link"}
                                           onClick={() => {
                                               this.setState({activePage: this.subpages.committee});
                                           }} style={style}>Edit Committee</a>
                                    </li>
                                </ul>
                            </div> :
                            <p>Please Sign In</p>}
                    </div>
                );

            } else if (!res["signedIn"]) {
                page = <Redirect to={"/signIn"}/>;
            } else {
                page = <Page403/>;
            }

            this.setState({page: page});

        };

        onload = onload.bind(this);

        xml.open("POST", "/tokensignin");
        xml.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xml.onload = onload;

        xml.send(JSON.stringify({
            verify: true,
            idToken: c
        }));

    }

    componentDidMount() {

    }

    render() {

        let c = cookies.get("token");

        if (!c) { // User is not signed in
            return <SignIn redirect={"/admin"}/>
        }

        return (
            <div>
                <div>{this.state.page}</div>
                <div>{this.state.html}</div>
            </div>
        );


    }
}