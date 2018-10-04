import React from 'react'


export default class CommitteeMemberCard extends React.Component {
    constructor() {
        super();
        this.state={
            name:null,
            desc:null,
            picURL:null
        }
    }

    componentWillMount() {

    }
    componentDidMount() {
        fetch("/GetCommitteeMember")
        .then((res)=>{return res.json()})
        .then(json=>this.setState({name:json.name,desc:json.desc,picURL:json.picURL}));

    }





    render () {
        var style={
            width:"18rem"
        }
        return (
            <div>
                <div class="card" style={style}>
                <img class="card-img-top" src={this.state.picURL} alt="Card image cap"/>
                <div class="card-body">
                  <h5 class="card-title">{this.state.name}</h5>
                  <p class="card-text">{this.state.desc}</p>
                </div>
              </div>
            </div>
        )
    }

}
