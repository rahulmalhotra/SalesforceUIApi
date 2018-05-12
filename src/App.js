import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewAccount from './ViewAccount';

class App extends Component {

  constructor() {
    super();
    this.state = {
      accessToken: '00D7F000000y9nJ!AR4AQJWjc1HDPtQWeBYHQcn0TBW8uRD67WVJd_5ZviIYHqU2kVuPbafSAWAcONHEDgwy2oiBsSkxcDGLcxQxXyNRwRxIyatI',
      accountId: '0017F00000hVCGz'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Salesforce UI API Demo with React</h1>
        </header>
        <div className="App-intro">
          <ViewAccount accessToken={this.state.accessToken} accountId={this.state.accountId} />
        </div>
      </div>
    );
  }
}

export default App;
