import React from 'react'

import Navigation from './header/Navigation'
import Footer from './footer/Footer'
import './pages/HomePage';
import  Routes from '../Routes';
import {auth, signIn} from './auth';
import { BrowserRouter } from 'react-router-dom';

export default class Layout extends React.Component {
    constructor (props) {
        super(props)
        this.state={
            isAdmin:false,
            user:null,
        }
        
        this.signIn=this.signIn.bind(this);


    }
      signIn=function(event){
        var self=this;
        signIn(event,function(result){


            fetch("/SignIn", {
                method: 'POST',
                /*mode:'no-cors',*/
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({

                    email:result.user.email,
                    pictureUrl:result.additionalUserInfo.profile.picture,
                    firstname: result.additionalUserInfo.profile.given_name,
                    lastname: result.additionalUserInfo.profile.family_name,
                    loginToken: result.credential.accessToken,
                    googleUid: result.user.uid,

                })
        }).then((res)=>res.json()).then(function(res){

            self.setState({isAdmin:res.isAdmin,user:result.user,credentials:result.credential});
        });
    })}

   
    render () {
        
            
        return (
                <div>
                    <BrowserRouter>
                    <div>
                        <Navigation /*signIn={this.signIn}*/ isAdmin={this.state.isAdmin} user={this.state.user}/>
                        <div>
                            <Routes isAdmin={this.state.isAdmin} user={this.state.user} adminUid={this.state.user&&this.state.user.uid?this.state.user.uid:null} adminToken={this.state.credentials!=null&&this.state.credentials.accessToken?this.state.credentials.accessToken:null}/>
                        </div>
                    </div>
                    </BrowserRouter>
                    <hr/>
                    <Footer />
                </div>
        )
    }
}
