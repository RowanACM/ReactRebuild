import React from 'react'


export default class MemberForm extends React.Component {
    constructor(props) {
        super();
        this.state={
            adminUid:props.adminUid,
            adminToken:props.adminToken,
            memberId:props.id,
            firstname:"",
            lastname:"",
            email:"",
            memberCommittees:[],
            committees:[],
            members:[],
            pictureUrl:"",
            googleUid:"",
            githubUsername:"",
            slackUsername:"",
            bannerId:"",
            canPostAnnouncements:false,

            
            
            


            
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
        console.log(event.target.id);
        switch(event.target.id){
            case "firstname":
                this.setState({firstname: event.target.value});
                break;
            case "lastname":
                this.setState({lastname:event.target.value});
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
                this.setState({canPostAnnouncements:!(this.state.canPostAnnouncements)});
                break;
            case "members":
                
                if(event.target.value!=-1){
                    fetch("/GetFullMember/"+event.target.value+"/"+this.state.adminUid+"/"+this.state.adminToken)
                    .then((res)=>
                        
                        res.json())
                    .then((json)=>{
                        console.log(json);
                        this.setState(json);
                        this.setState({memberId:json.memberid});
                    });
                    fetch("/GetCommitteesByMember/"+event.target.value)
                    .then((res)=>res.json())
                    .then((json)=>{
                        var joinedCommittees=[];
                        for(var item in json){
                            
                            joinedCommittees.push(json[item].committeeId);
                            
                        }
                        
                    })
                }
                else{
                    this.setState(
                        {
                            memberId:null,
                            firstname:"",
                            lastname:"",
                            email:"",
                            memberCommittees:[],
                            committees:[],
                            members:[],
                            pictureUrl:"",
                            googleUid:"",
                            githubUsername:"",
                            slackUsername:"",
                            bannerId:"",
                            canPostAnnouncements:false,
                        });
                        
                }
                //this.setState({memberId:event.target.value});
                break;
                default:
                    /*for(var i in this.state.committees){
                        console.log("committee-id-"+this.state.committees[i].committeeId);
                        if(event.target.id===("committee-id-"+this.state.committees[i].committeeId){
                            if(this.state.memberCommittees.includes(this.state.committees[i].committeeId)){
                                var list=this.state.memberCommittees;
                                list.splice(i,1);
                                this.setState({memberCommittees:list});
                            }
                            
                        }
                    }*/
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
                    adminToken:this.state.adminToken,
                    adminUid:this.state.adminUid,
                    memberId:this.state.memberId,
                    firstname:this.state.firstname,
                    lastname:this.state.lastname,
                    email:this.state.email,
                    phoneNumber:this.state.phoneNumber,
                    slackUsername:this.state.slackUsername,
                    githubUsername:this.state.githubUsername,
                    googleUid:this.state.googleUid,
                    pictureUrl:this.state.pictureUrl,
                    bannerId:this.state.bannerId,
                    canPostAnnouncements:this.state.canPostAnnouncements,
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
                            return <option value={c.memberid}>{c.lastname}, {c.firstname}</option>
                        })}
                        </select>
                        <label for="firstname">First Name</label>
                        <input type="text" id="firstname" class="form-control" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange}/>
                        <label for="lastname">Text</label>
                        <input type="text" id="lastname" class="form-control" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange}/>
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
                            <input type="checkbox" class="form-check-input" id="can-post-announcements" checked={this.state.canPostAnnouncements} value={this.state.canPostAnnouncements} onChange={this.handleChange}/>
                            <label class="form-check-label" for="can-post-announcements">Can Post Announcements</label>
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
