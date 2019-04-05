
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Jumbotron from '../common/Jumbotron';
import AnnouncementList from './announcements/AnnouncementsList.js';





export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return <div>
            <Jumbotron title="Rowan ACM" subtitle="Meetings on Friday @ 2-4pm in Robinson 201 a/b"/>
            
            <div>
            <AnnouncementList /> 
            </div>
        </div>


    }
}


