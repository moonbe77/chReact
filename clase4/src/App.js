import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import LifeCycle from './components/LifeCycle'
import PostList2 from './components/Post/PostList2'
import Form from './components/Form/Form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form/>
        <PostList2/>
      </div>
    );
  }
}

export default App;