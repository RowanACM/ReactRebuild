
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import AnnouncementForm from './admin/AnnouncementForm';
import MemberForm from './admin/MemberForm';
import CommitteeForm from './admin/CommitteeForm';




export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);

        this.subpages={
            announcement:0,
            member:1,
            committee:2
        }
        
        this.state={
            activePage:this.subpages.announcement,
            adminUid:this.props.adminUid,
            adminToken:this.props.adminToken,
            user:this.props.user,
            isAdmin:this.props.isAdmin
        };

        console.log("Admin Page"+props.adminUid);
    }
    renderAnnouncementForm(){
        return <div><AnnouncementForm adminUid={this.props.adminUid} adminToken={this.props.adminToken}/></div>;
    }
    renderMemberForm(){
        return <MemberForm adminUid={this.props.adminUid} adminToken={this.props.adminToken}/>;
    }

    render() {
        let html;
        switch(this.state.activePage){
            case this.subpages.announcement:
                html=this.renderAnnouncementForm();
                break;
            case this.subpages.member:
                html=this.renderMemberForm();
                break;
            case this.subpages.committee:
                html=<CommitteeForm adminUid={this.props.adminUid} adminToken={this.props.adminToken}/>;
        }
        var style={cursor:"pointer"};
        
        return (
        <div>
            {this.props.user!=null&&this.props.isAdmin==1 || true?
            <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class={this.state.activePage==this.subpages.announcement?"nav-link active":"nav-link"} onClick={()=>{this.setState({activePage:this.subpages.announcement});}} style={style}>Add Announcement</a>
                </li>
                <li class="nav-item">
                    <a class={this.state.activePage==this.subpages.member?"nav-link active":"nav-link"} onClick={()=>{this.setState({activePage:this.subpages.member});}} style={style}>Edit Member</a>
                </li>
                <li class="nav-item">
                    <a class={this.state.activePage==this.subpages.committee?"nav-link active":"nav-link"} onClick={()=>{this.setState({activePage:this.subpages.committee});}} style={style}>Edit Committee</a>
                </li>
            </ul>
            {html}</div>:
            <p>Please Sign In</p>}
        </div>
        );


    }
}