
import React, { Component } from 'react';

import '../../../App.css';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




export default class AccountHome extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            user:props.user,
            committees:[],
            joinedCommittees:[],
            memberId:-1,
            firstName:"",
            lastName:"",
            phone:"",
            bio:"",
            slack:"",
            github:"",
            pictureUrl:""

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount(){

        
        if(this.props.accessToken&&this.props.uid){
            fetch('/GetSelf/'+this.props.uid+"/"+this.props.accessToken).then(res=>res.json()).then(json=>this.setState(json));
        }
        fetch('/GetCommittees').then(res=>res.json()).then(json=>{this.setState({committees:json})});
        console.log(this.state.memberId);
        if(this.state.memberId!=-1){
            
            
         }
        
    }
    reloadCommittees(){
        fetch('/GetCommitteesByMember/'+this.state.memberId).then((res)=>res.json()).then((json)=>{
            var clist=[];
            for(var i in json){
                clist.append(i.committeeId);
            }
            
            this.setState({joinedCommittees:clist}
                )
        }
        );
    }
    handleChange(event){
       
        switch(event.target.id){
            case "first-name":
                this.setState({firstName:event.target.value});
                break;
            case "last-name":
                this.setState({lastName:event.target.value});
                break;
            case "phone-number":
                this.setState({phone:event.target.value});
                break;
            case "picture-url":
                this.setState({pictureUrl:event.target.value});
                break;
            case "slack":
                this.setState({slack:event.target.value});
                break;
            case "github":
                this.setState({github:event.target.value});
                break;
            case "bio":
                this.setState({bio:event.target.value});
                break;
            default:
            for(var i in this.state.committees){
                if(event.target.id===("committee-id-"+this.state.committees[i].committeeId)){
                    if(this.state.joinedCommittees.includes(this.state.committees[i].committeeId)){
                        var list=this.state.joinedCommittees;
                        list.splice(i,1);
                        this.setState({joinedCommittees:list});
                    }
                    else{
                        var list=this.state.joinedCommittees;
                        list.push(this.state.committees[i].committeeId);
                        this.setState({joinedCommittees:list});
                    }
                    
                }
                
            }
                
                

                
        }
    }
    handleSubmit(){
        fetch("/SaveSelf", {
            method: 'POST',
            /*mode:'no-cors',*/
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                memberId:this.state.memberId,
                adminToken:this.props.accessToken,
                adminUid:this.props.uid,
                memberId:this.state.memberId,
                firstName:this.state.firstName,
                lastName:this.state.lastName,
                email:this.state.email,
                phoneNumber:this.state.phone,
                slackUsername:this.state.slack,
                githubUsername:this.state.github,
                googleUid:this.state.googleUid,
                pictureUrl:this.state.pictureUrl,
                bannerId:this.state.bannerId,
                isAdmin:this.state.isAdmin,
                bio:this.state.bio,
                joinedCommittees:this.state.joinedCommittees,

            })
        });
    }
    render() {


        return (
        <div className="App" style={{textAlign:"center",margin:"auto",width:"300px"}}>
        <h2>Account Info</h2>
        <hr/>
        
            <Form>
                <FormGroup>
                    <Label for="first-name">First Name</Label>
                    <Input type="name" name="first-name" id="first-name" placeholder="Bobson" value={this.state.firstName} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="last-name">Last Name</Label>
                    <Input type="name" name="last-name" id="last-name" placeholder="Dougnut" value={this.state.lastName} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="phone-number">Phone Number</Label>
                    <Input type="phone" name="phone-number" id="phone-number" placeholder="18001234567" value={this.state.phone} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="picture-url">Picture Url</Label>
                    <Input type="text" name="picture-url" id="picture-url" placeholder="url.com/myphoto.jpg" value={this.state.pictureUrl} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="slack">Connect Slack</Label>
                    <Input type="text" name="slack" id="slack" placeholder="wizardboy2025" value={this.state.slack} onChange={this.handleChange}/> 
                </FormGroup>
                <FormGroup>
                    <Label for="github">Connect Github</Label>
                    <Input type="text" name="github" id="github" placeholder="wizardboy2025" value={this.state.github} onChange={this.handleChange}/> 
                </FormGroup>
                <FormGroup>
                    <Label for="bio">Bio</Label>
                    <Input type="text" name="bio" id="bio" placeholder="I am person..." value={this.state.bio} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="committees">Committees</Label>
                    <div name="committees" id="committees">
                    {this.state.committees.map((c,i)=>{
                           
                           return <div class="form-check">
                                       <input class="form-check-input" type="checkbox" id={"committee-id-"+c.committeeId} checked={this.state.joinedCommittees.includes(c.committeeId)} value={this.state.joinedCommittees.includes(c.committeeId) } onChange={this.handleChange}/>
                                       <label class="form-check-label" for={c.committeeId}>{c.name}</label>
                                   </div>
                       })}
                </div>
                </FormGroup>
                <Button onClick={this.handleSubmit}>Save</Button>
            </Form>}
        </div>
        );


    }
}


