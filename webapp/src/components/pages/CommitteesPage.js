
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import CommitteesList from './committees/CommitteesList';
import Jumbotron from '../common/Jumbotron';




export default class CommitteesPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return (
        <div className="App">
            <Jumbotron title="Committees" subtitle="" img="https://raw.githubusercontent.com/RowanACM/ACMApp/master/website/img/bannerBackgroundSmall.jpg"/>

           <CommitteesList />
        </div>
        );


    }
}


