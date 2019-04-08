import React from 'react'
import CommitteeCard from './CommitteeCard';



export default class CommitteesList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            committees:[]
        }

    }

    componentWillMount() {
        
    }
    componentDidMount() {
        fetch('/committees.json')
        .then(res=>res.json())
        .then(json=>{this.setState({committees:json})});

    }





    render () {

        return (
            <div className="container-fluid">
                <div className="row" style={{justifyContent: "center"}}>
                    {this.state.committees.map((committee,i)=>{
                      return   <CommitteeCard title={committee.name} 
                        body={committee.description} 
                        memberName={committee.headFirstName} 
                        memberEmail={committee.headEmail} 
                        picture={committee.headPicture} 
                        desc={committee.description}/>
                    })

                    }
                </div>
                
                
            </div>
        )
    }

}
