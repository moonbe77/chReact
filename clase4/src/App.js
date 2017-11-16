import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import LifeCycle from './components/LifeCycle'
import PostList2 from './components/PostList2'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <PostList2/>
      </div>
    );
  }
}

export default App;