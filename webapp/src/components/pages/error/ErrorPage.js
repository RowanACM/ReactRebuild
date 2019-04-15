import React from 'react';

export default class ErrorPage extends React.Component {

    constructor(props) {
        super(props);

        let lines = null;
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", "facts.txt", false);
        xmlhttp.send();
        if (xmlhttp.status === 200) {
            lines = xmlhttp.responseText;

            let facts = lines.split("\n");

            window.onload = function () {
                document.getElementById("fact").innerText = facts[Math.floor((Math.random() * facts.length))];
            };

        }

    }

    render() {


        return (<div className={"centerParent"}>

                <div style={{color: "gray", fontSize: "25px"}}>{this.code}</div>
                <h1>Gadzooks!</h1>
                <p>{this.desc} Here's a fun fact to console you!</p>
                <p id={"fact"}/>

            </div>
        );


    }
}


