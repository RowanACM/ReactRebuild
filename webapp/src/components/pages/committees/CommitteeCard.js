import React from 'react'
import {Link} from "react-router-dom"

export default class CommitteeCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:props.title,
            body:props.body,
            memberName:props.memberName,
            memberEmail:props.memberEmail,
            picture:props.picture,
            desc:props.desc,

        }
    }



    componentWillMount() {

    }
    componentDidMount() {


    }





    render () {
        var style={height:"90%", margin:"20px"};

        return (
            <div>
                <div class="card text-white bg-primary mb-3" style={style}>
                  <img class="card-img-top" src={this.state.picture} alt="Card image cap"></img>
                  <div class="card-body">
                <Link to = {'/Committee/'+this.state.title}><h5 class="card-title" style={{color:"WHITE"}}>{this.state.title}</h5></Link>
                <p class="card-text">{this.state.desc}</p>
                <p>If you have any question please contact {this.state.memberName} at </p>
                <a href="#" class="btn btn-secondary" >{this.state.memberEmail}</a>
                  </div>
             </div>
            </div>
        )
    }

}

