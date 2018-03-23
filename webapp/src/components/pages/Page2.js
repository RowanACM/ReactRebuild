
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';




export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to page 2</h1>
            </header>
            <p className="App-intro">
               You set up a route yay! :D
            </p>
        </div>


    }
}


