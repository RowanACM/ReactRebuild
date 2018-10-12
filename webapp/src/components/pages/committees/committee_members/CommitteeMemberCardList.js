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
                    desc="Some description" picURL={member.pictureUrl==null?"http://cliparting.com/wp-content/uploads/2016/10/Person-people-icon-clipart-kid.png":member.pictureUrl}/>
                }


            )
            }
            </div>
        )
    }

}
