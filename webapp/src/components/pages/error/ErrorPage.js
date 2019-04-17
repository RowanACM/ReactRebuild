import React from 'react';

export default class ErrorPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fact: ""
        };

    }

    componentWillMount() {

        let lines = null;
        let xml = new XMLHttpRequest();

        let onload = r => {

            if (xml.status === 200) {
                lines = xml.responseText;

                let facts = lines.split("\n");
                this.setState({fact: facts[Math.floor((Math.random() * facts.length))]})

            }

        };

        onload = onload.bind(this);

        xml.onload = onload;
        xml.open("GET", "/facts.txt");
        xml.send();

    }

    render() {


        return (<div className={"centerParent"}>

                <div style={{color: "gray", fontSize: "25px"}}>{this.code}</div>
                <h1>Gadzooks!</h1>
                <p>{this.desc} Here's a fun fact to console you!</p>
                <p id={"fact"}>{this.state.fact}</p>

            </div>
        );


    }
}


