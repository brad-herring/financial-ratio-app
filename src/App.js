import React, { Component } from 'react';
import './App.css';
import Analytics from './Components/Analytics';

class App extends Component {

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="header-container">
                <h1>Financial Analyzer</h1>
            </div>
            <div className="info">
            <Analytics />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
