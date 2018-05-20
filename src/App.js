import React, { Component } from 'react';
import './App.css';
import { Tabitem } from './Tabitem'
import { Searchbar } from './Searchbar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Searchbar />
        <Tabitem />
      </div>
    );
  }
}

export default App;
