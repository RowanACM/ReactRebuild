import React, { Component } from 'react';
import './App.css';
import HomePage from './components/pages/HomePage';
import Pages2 from './components/pages/Page2';

import { BrowserRouter as Router, Route,  } from 'react-router-dom';


class Routes extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={HomePage}/>
                <Route  path="/page2" component={Pages2}/>

            </div>
        </Router>
    );
  }
}

export default Routes;
