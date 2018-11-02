import React from 'react'


export default class MemberForm extends React.Component {
    constructor(props) {
        super();
        this.state={
            adminUid:props.adminUid,
            adminToken:props.adminToken,
            memberId:props.id,
            firstName:"",
            lastName:"",
            email:"",
            memberCommittees:[],
            committees:[],
            members:[],
            pictureUrl:"",
            googleUid:"",
            githubUsername:"",
            slackUsername:"",
            bannerId:"",
            isAdmin:false,

            
            
            


            
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
            case "firstname":
                this.setState({firstName: event.target.value});
                break;
            case "lastname":
                this.setState({lastName:event.target.value});
                break;
            case "email":
                this.setState({email:event.target.value});
                break;
            case "picture-url":
                this.setState({pictureUrl:event.target.value});
                break;
            case "google-uid":
                this.setState({googleUid:event.target.value});
                break;
            case "phone-number":
                this.setState({phoneNumber:event.target.value});
                break;
            case "slack-username":
                this.setState({slackUsername:event.target.value});
                break;
            case "github-username":
                this.setState({githubUsername:event.target.value});
                break;
            case "banner-id":
                this.setState({bannerId:event.target.value});
                break;
            case "can-post-announcements":
                this.setState({isAdmin:!(this.state.isAdmin)});
                break;
            case "members":
                
                if(event.target.value!=-1){
                    fetch("/GetFullMember/"+event.target.value+"/"+this.state.adminUid+"/"+this.state.adminToken)
                    .then((res)=>
                        
                        res.json())
                    .then((json)=>{
                        console.log(json);
                        this.setState(json);
                        this.setState({memberId:json.memberId});
                    });
                    fetch("/GetCommitteesByMember/"+event.target.value)
                    .then((res)=>res.json())
                    .then((json)=>{
                        var joinedCommittees=[];
                        for(var item in json){
                            
                            joinedCommittees.push(json[item].committeeId);
                            
                        }
                        this.setState({memberCommittees:joinedCommittees});
                        
                    })
                }
                else{
                    this.setState(
                        {
                            memberId:null,
                            firstName:"",
                            lastName:"",
                            email:"",
                            memberCommittees:[],
                            committees:[],
                            members:[],
                            pictureUrl:"",
                            googleUid:"",
                            githubUsername:"",
                            slackUsername:"",
                            bannerId:"",
                            isAdmin:false,
                        });
                        
                }
                //this.setState({memberId:event.target.value});
                break;
                default:
                    for(var i in this.state.committees){
                        if(event.target.id===("committee-id-"+this.state.committees[i].committeeId)){
                            if(this.state.memberCommittees.includes(this.state.committees[i].committeeId)){
                                var list=this.state.memberCommittees;
                                list.splice(i,1);
                                this.setState({memberCommittees:list});
                            }
                            else{
                                var list=this.state.memberCommittees;
                                list.push(this.state.committees[i].committeeId);
                                this.setState({memberCommittees:list});
                            }
                            
                        }
                        
                    }
                    break;
        }
    }
    handleSubmit(event) {
            fetch("/AddEditMember", {
                method: 'POST',
                /*mode:'no-cors',*/
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    memberId:this.state.memberId,
                    adminToken:this.state.adminToken,
                    adminUid:this.state.adminUid,
                    memberId:this.state.memberId,
                    firstName:this.state.firstName,
                    lastName:this.state.lastName,
                    email:this.state.email,
                    phoneNumber:this.state.phoneNumber,
                    slackUsername:this.state.slackUsername,
                    githubUsername:this.state.githubUsername,
                    googleUid:this.state.googleUid,
                    pictureUrl:this.state.pictureUrl,
                    bannerId:this.state.bannerId,
                    isAdmin:this.state.isAdmin,
                    memberCommittees:this.state.memberCommittees,

                })
            });
        
     
    }

    render () {
        var style={
            padding:"50px"
        }
        return (
            <div style={style}>
                <form>
                    <div class="form-group">
                        <select class="form-control" id="members" onChange={this.handleChange}>
                        <option value={-1}>CREATE NEW</option>
                        {this.state.members.map((c,i)=>{
                            return <option value={c.memberId}>{c.lastName}, {c.firstName}</option>
                        })}
                        </select>
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" class="form-control" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange}/>
                        <label for="lastname">Last Name</label>
                        <input type="text" id="lastname" class="form-control" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange}/>
                        <label for="email">Email</label>
                        <input type="text" id="email" class="form-control" placeholder="Member's Email" value={this.state.email} onChange={this.handleChange}/>
                        <label for="phone-number">Phone Number</label>
                        <input type="text" id="phone-number" class="form-control" placeholder="Member's Phone Number" value={this.state.phoneNumber} onChange={this.handleChange}/>
                        <label for="slack-username">Slack Username</label>
                        <input type="text" id="slack-username" class="form-control" placeholder="Slack Username" value={this.state.slackUsername} onChange={this.handleChange}/>
                        <label for="github-username">Github Username</label>
                        <input type="text" id="github-username" class="form-control" placeholder="Github Username" value={this.state.githubUsername} onChange={this.handleChange}/>
                        <label for="picture-url">Picture Url</label>
                        <input type="text" id="picture-url" class="form-control" placeholder="Picture Url" value={this.state.pictureUrl} onChange={this.handleChange}/>
                        <label for="banner-id">Banner Id</label>
                        <input type="text" id="banner-id" class="form-control" placeholder="Banner Id" value={this.state.bannerId} onChange={this.handleChange}/>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="can-post-announcements" checked={this.state.isAdmin} value={this.state.isAdmin} onChange={this.handleChange}/>
                            <label class="form-check-label" for="can-post-announcements">is Admin?</label>
                        </div>
                        
                        
                        
                        
                        
                        {this.state.committees.map((c,i)=>{
                           
                            return <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="checkbox" id={"committee-id-"+c.committeeId} checked={this.state.memberCommittees.includes(c.committeeId)} value={this.state.memberCommittees.includes(c.committeeId) } onChange={this.handleChange}/>
                                        <label class="form-check-label" for={c.committeeId}>{c.name}</label>
                                    </div>
                        })}
                       
                        <input type="button" id="submit" class="form-control" onClick={this.handleSubmit} value="Submit" style={{width:"100px", marginTop:"30px"}}></input>


                    </div>
                </form>
            </div>
        )
    }

}
