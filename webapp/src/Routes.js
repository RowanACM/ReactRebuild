import React, { Component } from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';
import CommitteesPage from './components/pages/CommitteesPage';
import AdminPage from './components/pages/AdminPage';
import CommitteeMembersPage from './components/pages/CommitteeMembersPage';

import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';
import AccountPage from './components/pages/AccountPage';
import Page404 from './components/pages/Page404';
import Navigation from './components/header/Navigation';
import BrowserRouter from 'react-router-dom/BrowserRouter';


class Routes extends Component {
  constructor(props){
    super(props);
    this.state={
      adminUid:props.adminUid,
      adminToken:props.adminToken
    };
    
  }
  render() {
  
    return ( 
        
            
            <Switch>
              
                    <Route exact path="/" component={HomePage}/>
                    <Route  exact path="/Committees" component={CommitteesPage}/>
                    <Route exact path="/Committee/:committeeName" component={CommitteeMembersPage}/>
                    <Route  exact path="/Admin" render={()=><AdminPage adminUid={this.props.adminUid} adminToken={this.props.adminToken} user={this.props.user} isAdmin={this.props.isAdmin}/>}/>
                    <Route exact path="/Account" render={()=><AccountPage user={this.props.user} uid={this.props.adminUid} accessToken={this.props.adminToken} isAdmin={this.props.isAdmin}/>}/>
                    <Route path="*" exact={true} component={Page404} />
                
            </Switch>
     
        
       
    );
  }
}

export default Routes;
