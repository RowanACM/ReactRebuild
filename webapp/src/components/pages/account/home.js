
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
            id:-1,
            firstName:"",
            lastName:"",
            phone:"",
            bio:"",
            slack:"",
            github:"",
            pictureUrl:""

        }
        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount(){

        
        if(this.props.accessToken&&this.props.uid)
        fetch('/GetSelf/'+this.props.uid+"/"+this.props.accessToken).then(res=>res.json()).then((json)=>{
            console.log(json);
            this.setState({json});
        });
        fetch('/GetCommittees').then(res=>res.json()).then(json=>{this.setState({committees:json})});
        if(this.state.id!=-1)
            fetch('/GetCommitteeByMember/'+this.state.id).then(res=>res.json()).then(json=>{
                var clist=[];
                for(var i in json){
                    clist.append(i.committeeId);
                }
                
                this.setState({joinedCommittees:clist}
                    )});
        
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
                
                for(var c in this.state.committees){
                    if(event.target.id==="committee"+this.state.committees[c].committeeId){
                        if(this.state.joinedCommittees.includes(this.state.committees[c].committeeId)){
                                var list=this.state.joinedCommittees;
                                list.splice(c,1);
                                this.setState({joinedCommittees:list});
                        }
                        else{
                            var list=this.state.memberCommittees;
                            list.push(this.state.committees[c].committeeId);
                            this.setState({memberCommittees:list});
                        }
                    }
                }
                

                
        }
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
                    <Input type="select" name="committees" id="committees" multiple onChange={this.handleChange}>
                        {this.state.committees.map((committee,i)=>{ 
                            return <option selected={this.state.joinedCommittees.includes(committee.committeeId)?true:false} id={"committee"+committee.id}>{committee.name}</option>
                        })
                        }
                    </Input>
                </FormGroup>
                <Button>Save</Button>
            </Form>}
        </div>
        );


    }
}


