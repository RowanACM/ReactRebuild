
import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import CirclePicture from '../CirclePicture'




export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {


        return <div className="App">
            <header className="App-header">
                <CirclePicture/>
                <h1 className="App-title">Welcome to Galby the destroyer</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>


    }
}


