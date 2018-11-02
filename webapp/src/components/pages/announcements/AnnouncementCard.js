import React from 'react'


export default class AnnouncmentCard extends React.Component { 
    constructor(props){
      super(props)
      this.state={
        name:props.title,
        desc:props.text,
        postedDate:props.postedDate,
        picUrl:props.imageUrl,
        committee:props.committee,
        externalLink:props.externalLink

    }
    }
    componentWillMount(){}
    
    componentDidMount(){
    
    }
    render(){
      var style={
      width:"80%",
      height:"10%",
      margin:"auto",
      marginBottom:"20px",
      marginTop:"20px"
      }
    
    
    return(
    
      <div class="card" style={style}>
        {this.state.picUrl?<img class ="car-img-top" src={this.state.picURL} alt = "Card image cap"/>:null}
        <div class ="card-body">
          <h3 class= "card-title" style={{margin:"auto",display:"in-line",textAlign:"center"}}><strong>{this.state.name}</strong></h3>
          <p class ="card-text">{this.state.desc}</p>
          {this.state.externalLink?<a href={this.state.externalLink}></a>:null}
          <p class="card-text" style={{textAlign:"right",WebkitTextFillColor:"grey"}}>Posted By {this.state.committee} on {this.props.postedDate.substring(0,10)}</p>
        </div>
      </div>
    
    
    )
    }
    
    }
    