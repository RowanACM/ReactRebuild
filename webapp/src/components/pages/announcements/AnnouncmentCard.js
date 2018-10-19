import React from 'react'


export default class AnnouncmentCard extends React.Component { 
    constructor(props){
      super(props)
      this.state={
        name:props.name,
        desc:props.desc,
        picUrl=props.picUrl
    }
    }
    componentWillMount(){}
    
    componentDidMount(){
    
    }
    render(){
      var style={
      width:"18ren"
      }
    
    
    return(
    <div>
      <div class="card" style={style}>
      <img class ="car-img-top" src={this.state.picURL} alt = "Card image cap"/>
      <div class ="card-body">
      <h5 class= "card-title">{this.state.name}</h5>
      <p class ="card-text">{this.state.desc}</p>
    </div>
    </div>
    </div>
    
    )
    }
    
    }
    