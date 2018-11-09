
import React, { Component } from 'react';

export default class Page404 extends React.Component {
    constructor(props) {
        super(props);

        let lines = null;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "facts.txt", false);
        xmlhttp.send();
        if (xmlhttp.status==200) {
            lines = xmlhttp.responseText;
        }

        let facts = lines.split("\n");

        window.onload = function () {
            let fact = facts[Math.floor((Math.random() * facts.length))];
            document.getElementById("fact").innerText = fact;
        };

    }

    render() {


        return (<div className={"centerParent"}>

                <div style={{color: "gray", fontSize: "25px"}}>404</div>
                <h1>Gadzooks!</h1>
                <p>We couldn't find the page you've requested. Here's a fun fact to console you!</p>
                <p id={"fact"}></p>

            </div>
        );


    }
}


