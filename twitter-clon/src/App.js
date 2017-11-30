import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login/Login';
import Twitt from './components/Feed/Twitt';
import { PageHeader } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PageHeader className="header">
          Twitter Clone <small>2620</small>
        </PageHeader>
        <div className="container">            
          <Router>
            <div>              
              <Route path="/" exact={true} component={Login}/>
              <Route path="/twitts" exact={true} component={Twitt}/>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
