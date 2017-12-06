import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//import Login from './components/Login/Login';
import { Container, Col, Row }  from 'muicss/react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Twitt from './components/Feed/Twitt';
import Register from './components/Login/Register';


class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Container>
            <Row>              
              <Col md="12">
                <Router>
                    <div  className="mui--align-middle" style={{marginTop:'15px'}}>                 
                      <Route path="/" exact={true} component={Login}/>  
                      <Route path="/twitts" exact={true} component={Twitt}/>
                      <Route path="/register" exact={true} component={Register}/>
                    </div>
                </Router>
              </Col>  
            </Row> 
          </Container>
      </div>
    );
  }
}

export default App;
