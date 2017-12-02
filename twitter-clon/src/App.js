import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import Login from './components/Login/Login';
import { Container, Col, Row }  from 'muicss/react';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Twitt from './components/Feed/Twitt';


class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Container>
            <Row>
              <Col md="3">{
                window.location.pathname === '/' ?  
                'Inicia sesion para ver los twits' 
                : window.location.pathname}
              </Col>  
              <Col md="9">
                <Router>
                    <div  className="mui--align-middle" style={{marginTop:'15px'}}>                 
                      <Route path="/" exact={true} component={Login}/>  
                      <Route path="/twitts" exact={true} component={Twitt}/>
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
