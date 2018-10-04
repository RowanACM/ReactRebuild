import React, { Component } from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';
import CommitteesPage from './components/pages/CommitteesPage';
import AdminPage from './components/pages/AdminPage';

import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';


class Routes extends Component {
  render() {
    return (
        <Router>
            <Switch>
              
                    <Route exact path="/" component={HomePage}/>
                    <Route  exact path="/Committees" component={CommitteesPage}/>
                    <Route  exact path="/Admin" component={AdminPage}/>
                    <Route path="*" exact={true} component={class _404 extends Component{render(){return(<p>404 FUCKING PANIC!!</p>)}}}/>
                
            </Switch>
        </Router>
    );
  }
}

export default Routes;
