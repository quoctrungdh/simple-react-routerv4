import React, { Component } from 'react';

import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
