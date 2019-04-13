import React from 'react'


export default class AnnouncementCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            text: props.text,
            date: props.date,
            author: props.author,
            link: props.link, // Optional
            color: props.color // Optional
        };

        this.colorStyle = this.state.color ? {backgroundColor: this.state.color}: {};

}

    componentWillMount() {
    }

    componentDidMount() {

    }

    render() {
        let style = {
            width: "80%",
            height: "10%",
            margin: "auto",
            marginBottom: "20px",
            marginTop: "20px"
        };

        return (

            <div class="card" style={style}>
                <div class="card-header text-white primary" style={this.colorStyle}><h3>{this.state.title}</h3></div>
                <div class="card-body">
                    <p>{this.state.text}</p>
                    {this.state.link ? <a href={this.state.link}><button class="btn primary float-right" style={this.colorStyle}>Read more</button></a> : null}
                </div>
                <div class="card-footer text-right">
                    <small>Posted By {this.state.author} on {this.timeToDate(this.state.date)}</small>
                </div>

            </div>


        )
    }

    timeToDate(s) {

        let d = new Date(parseInt(s));
        return d.toString();

    }

}
    