//import React, { Component } from 'react';
import React from 'react';
import './App.css';
import Header from './components/Header'
import Img from './components/Image'
import Counter from './components/Counter'
import Counter2 from './components/Counter2'


class Texto extends React.Component {
  render(){
    return (<div> 
              <p>HOLA ESTO ES MI TEXTO</p>
          </div>)
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header/>
        <div className="App-intro">
          <Texto/>        
        </div>
        <Img/>
        <Counter/>
        <Counter2 inicio="10"/>
      </div>
    );
  }
}


export default App;
