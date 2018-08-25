import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-site">
        <header className="site-header">
          <h1 className="site-title">Hydrophobe</h1>
        </header>
        <Button variant="raised" color="primary">
          Get Started
        </Button>
      </div>
    );
  }
}

export default App;
