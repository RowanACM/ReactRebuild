
import React, { Component } from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';
import '../../App.css';
import CommitteeMemberCardList from './committees/committee_members/CommitteeMemberCardList';
import Jumbotron from '../common/Jumbotron';




export default class CommitteeMembersPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return (
        <div className="App">
        <h5 style={{leftPadding:'100px',width:'100%', textAlign:'left'}}><Link to='/Committees' style={{padding:'20px'}}>&lt;Back</Link></h5>
        <Jumbotron title={this.props.match.params.committeeName} subtitle="" img="https://raw.githubusercontent.com/RowanACM/ACMApp/master/website/img/bannerBackgroundSmall.jpg"/>
        <hr/>
           <CommitteeMemberCardList committee={this.props.match.params.committeeName} />
        </div>
        );


    }
}


