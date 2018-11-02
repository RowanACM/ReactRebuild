
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Jumbotron from '../common/Jumbotron';






export default class Four0FourPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return <div>
            <Jumbotron title="404 Error" subtitle="Please check your url or contact administrator for broken page!" img="https://raw.githubusercontent.com/RowanACM/ACMApp/master/website/img/bannerBackgroundSmall.jpg" />

        </div>


    }
}