import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/navbar';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div class="container">
            <Route path="/" exact={true} Component={Home}/>
            <Route path="/staff" exact={true} Component={Staff}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
