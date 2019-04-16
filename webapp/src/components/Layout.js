import React from 'react'

import Navigation from './header/Navigation'
import Footer from './footer/Footer'
import './pages/HomePage';
import  Routes from '../Routes';
import {auth, signIn} from './auth';
import { BrowserRouter } from 'react-router-dom';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default class Layout extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isAdmin: false,
            user: cookies.get("token"),
        };

    }
   
    render () {
        
            
        return (
                <div>
                    <BrowserRouter>
                    <div>
                        <Navigation isAdmin={this.state.isAdmin} user={this.state.user}/>
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
