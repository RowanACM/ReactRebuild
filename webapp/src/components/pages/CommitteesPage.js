
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import CommitteesList from './committees/CommitteesList';




export default class CommitteesPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return (
        <div className="App">
           <CommitteesList />
        </div>
        );


    }
}


