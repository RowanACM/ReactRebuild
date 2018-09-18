import React, { Component } from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';
import CommitteesPage from './components/pages/CommitteesPage';

import { BrowserRouter as Router, Route,  } from 'react-router-dom';


class Routes extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route  exact path="/Committees" component={CommitteesPage}/>
            </div>
        </Router>
    );
  }
}

export default Routes;
