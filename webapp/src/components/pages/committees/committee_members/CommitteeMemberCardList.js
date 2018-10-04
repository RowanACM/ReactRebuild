import React from 'react'


export default class CommitteeMemberCard extends React.Component {
    constructor() {
        super();
        this.state={
            committee:this.props.committee
        }
    }

    componentWillMount() {

    }
    componentDidMount() {
        fetch("/GetCommitteeMembers/"+this.state.committee)
        .then((res)=>{return res.json()})
        .then(json=>this.setState({name:json.name,desc:json.desc,picURL:json.picURL}));

    }





    render () {
        
        return (
            <div>
               
            </div>
        )
    }

}
