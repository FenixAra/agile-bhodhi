import React, { Component } from 'react';
import './css/App.css';
import NavBar from './navbar.js';
import MainCarousel from './carousel.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Content/>
      </div>
    );
  }
}

class Header extends React.Component {
   render() {
      return (
         <div className="Header-div">
            <h1>AGILE BHODHI</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
        <div className="App">
          <NavBar />
          <MainCarousel />
        </div>
      );
   }
}

export default App;
