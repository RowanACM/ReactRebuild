import React from 'react'


export default class CommitteeMemberCard extends React.Component {
    constructor() {
        super();
    }

    componentWillMount() {

    }
    componentDidMount() {
        fetch("/GetCommitteeMember")
        .then((res)=>{return res.json()})
        .then(json=>this.setState({json}));

    }





    render () {

        return (
            <div>
                
            </div>
        )
    }

}
