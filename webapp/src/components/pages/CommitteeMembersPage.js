
import React, { Component } from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';
import '../../App.css';
import CommitteeMemberCardList from './committees/committee_members/CommitteeMemberCardList';




export default class CommitteesPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return (
        <div className="App">
        <h5 style={{leftPadding:'100px',width:'100%', textAlign:'left'}}><Link to='/Committees' style={{padding:'20px'}}>&lt;Back</Link></h5>
        <h1>{this.props.match.params.committeeName} Members</h1>
        <hr/>
           <CommitteeMemberCardList committee={this.props.match.params.committeeName} />
        </div>
        );


    }
}


