import React from 'react'


export default class CommitteeForm extends React.Component {
    constructor(props) {
        super();
        this.state={
            adminToken:props.adminToken,
            adminUid:props.adminUid,
            committeeId:-1,
            name:"",
            description:"",
            committeeHeadId:-1,
            learningChairId:-1,
            committees:[],
            members:[],



            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {

    }
    componentDidMount() {
        fetch("/GetCommittees").then((res)=>res.json()).then((json)=>{this.setState({committees:json})});
        fetch("/GetFullMembers/"+this.state.adminUid+"/"+this.state.adminToken).then((res)=>res.json()).then((json)=>{this.setState({members:json})});

    }
    handleChange(event) {
        switch(event.target.id){
            case "name":
                this.setState({name: event.target.value});
                break;
            case "description":
                this.setState({description:event.target.value});
                break;
            case "committees":
                if(event.target.value!=-1){
                    fetch("/GetCommittee/"+event.target.value)
                    .then((res)=>
                        res.json())
                    .then((json)=>{
                        console.log(json);
                        this.setState(json);
                    })
                }
                else{
                    this.setState({
                        name:"",
                        description:"",
                        committeeHeadId:-1,
                        learningChairId:-1,
                    }
                        );
                        
                }
                break;
            case "committee-head-id":
                this.setState({committeeHeadId:event.target.value});
                break;
            case "learning-chair-id":
                this.setState({learningChairId:event.target.value});
                break;
        }
    }
    handleSubmit(event) {
            if(this.state.committeeId!=-1){
                var j={
                    committeeId:this.state.committeeId,
                    name:this.state.name,
                    description:this.state.description,
                    committeeHeadId:this.state.committeeHeadId==-1?undefined:this.state.committeeHeadId,
                    learningChairId:this.state.learningChairId==-1?undefined:this.state.learningChairId,
                    author:this.state.adminUid,
                    authorToken:this.state.adminToken
                    };
            }
            else{
                var j={
                    name:this.state.name,
                    description:this.state.description,
                    committeeHeadId:this.state.committeeHeadId==-1?undefined:this.state.committeeHeadId,
                    learningChairId:this.state.learningChairId==-1?undefined:this.state.learningChairId,
                    author:this.state.adminUid,
                    authorToken:this.state.adminToken};
            }
            fetch('/AddEditCommittee', {
                method: 'POST',
                /*mode:'no-cors',*/
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(j)
            }).then(alert("done"));
        }
     
    

    render () {
        var style={
            padding:"50px"
        }
        return (
            <div style={style}>
                <form>
                    <div class="form-group">
                        <select class="form-control" id="committees" onChange={this.handleChange}>
                        <option value={-1}>CREATE NEW</option>
                        {this.state.committees.map((c,i)=>{
                            return <option value={c.committeeId}>{c.name}</option>
                        })}
                        </select>
                        <label for="name">Name</label>
                        <input type="text" id="name" class="form-control" placeholder="Name Of Committee" value={this.state.name} onChange={this.handleChange}/>
                        <label for="description">Description</label>
                        <input type="text" id="description" class="form-control" placeholder="Description for Committee" value={this.state.description} onChange={this.handleChange}/>
                        <label for="committee-head-id">Committee Head</label>
                        <select class="form-control" id="committee-head-id" onChange={this.handleChange} value={this.state.committeeHeadId}>
                            <option value={-1}>Please select a Committee Head</option>
                            {this.state.members.map((c,i)=>{
                                return <option value={c.memberId}>{c.lastName}, {c.firstName}</option>
                            })}
                        </select>
                        <label for="learning-chair-id">LearningChair</label>
                        <select class="form-control" id="learning-chair-id" onChange={this.handleChange} value={this.state.learningChairId}>
                            <option value={-1}>Please select a Learning Chair</option>
                            {this.state.members.map((c,i)=>{
                                console.log(c);
                                return <option value={c.memberId}>{c.lastName}, {c.firstName}</option>
                            })}
                        </select>
                        <input type="button" id="submit" class="form-control" onClick={this.handleSubmit} value="Submit" style={{width:"100px", marginTop:"30px"}}></input>


                    </div>
                </form>
            </div>
        )
    }

}
