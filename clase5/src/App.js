import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Login from './Components/Login/Login';
import PostList from './Components/Post/PostList';
import PostForm from './Components/Post/PostForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Router Example</h1>
        </header>
        <div className="App-intro">
            <Router>
                <div>
                    <Route path={'/'} exact={true} component={Login}/>
                    <Route path={'/postlist'} exact={true} component={PostList}/>
                    <Route path={'/postlist/add'} exact={true} component={PostForm}/>
                </div>
            </Router>
        </div>
      </div>
    );
  }
}

export default App;
