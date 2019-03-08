import React from 'react'


export default class AnnouncmentCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.title,
            desc: props.text,
            postedDate: props.postedDate,
            picUrl: props.imageUrl,
            committee: props.committee,
            externalLink: props.externalLink

        }
    }

    componentWillMount() {
    }

    componentDidMount() {

    }

    render() {
        var style = {
            width: "80%",
            height: "10%",
            margin: "auto",
            marginBottom: "20px",
            marginTop: "20px"
        };


        return (

            <div class="card" style={style}>
                {this.state.picUrl ? <img class="car-img-top" src={this.state.picURL} alt="Card image cap"/> : null}
                <div class="card-header text-white primary"><h3>{this.state.name}</h3></div>
                <div class="card-body">
                    <p>{this.state.desc}</p>
                    {this.state.externalLink ? <a href={this.state.externalLink}><button class="btn primary float-right">Read more</button></a> : null}
                </div>
                <div class="card-footer text-right">
                    <small>Posted By {this.state.committee} on {this.props.postedDate}</small>
                </div>

            </div>


        )
    }

}
    