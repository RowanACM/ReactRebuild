
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import AnnouncementForm from './admin/AnnouncementForm';




export default class AdminPage extends React.Component {
    constructor(props) {
        super(props);
        this.subpages={
            announcement:0,
            member:1
        }
        this.state={activePage:this.subpages.announcement};
    }
    renderAnnouncementForm(){
        return <div><AnnouncementForm /></div>;
    }
    renderMemberForm(){
        return <text>hi</text>;
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
        }
        var style={cursor:"pointer"};

        return (
        <div>
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class={this.state.activePage==this.subpages.announcement?"nav-link active":"nav-link"} onClick={()=>{this.setState({activePage:this.subpages.announcement});}} style={style}>Add Announcement</a>
                </li>
                <li class="nav-item">
                    <a class={this.state.activePage==this.subpages.member?"nav-link active":"nav-link"} onClick={()=>{this.setState({activePage:this.subpages.member});}} style={style}>Edit Member</a>
                </li>
            </ul>
            {html}
        </div>
        );


    }
}