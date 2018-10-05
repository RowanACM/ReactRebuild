import React from 'react';
import CommitteeMemberCard from './CommitteeMemberCard';


export default class CommitteeMemberCardList extends React.Component {
    constructor(props) {
        super();
        this.state={
            committee:props.committee,
            memberList:[]
        }
    }

    componentWillMount() {

    }
    componentDidMount() {
        fetch("/GetCommitteeMembers/"+this.state.committee)
        .then((res)=>{return res.json()})
        .then(json=>this.setState({memberList:json}));

    }





    render () {
        return (
            <div>
            {this.state.memberList.map((member,i)=>
                {
                    
                    return <CommitteeMemberCard name={member.firstname+" "+member.lastname} 
                    desc="Some description" picURL={member.pictureUrl==null?"https://cdn.newsapi.com.au/image/v1/c9fc5df46cff1081ac13ae18638de1ab":member.pictureUrl}/>
                }


            )
            }
            </div>
        )
    }

}
