import React from 'react'


export default class CommitteeCard extends React.Component {
    constructor(props) {
        super();
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
         var style = { width: (this.state.memberEmail.length - 5) + "rem", margin: "20px" };

        return (
            <div>
                <div class="card text-white bg-primary mb-3" style={style}>
                  <img class="card-img-top" src={this.state.picture} alt="Card image cap"></img>
                  <div class="card-body">
                <h5 class="card-title">{this.state.title}</h5>
                <p class="card-text">{this.state.desc}</p>
                <a href="#" class="btn btn-secondary" >{this.state.memberEmail}</a>
                  </div>
             </div>
            </div>
        )
    }

}

