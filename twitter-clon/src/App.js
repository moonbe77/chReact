import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

//import Login from './components/Login/Login';
import { Container, Col, Row }  from 'muicss/react'
import Header from './components/Header/Header'
import Login from './components/Login/Login'
import Twitt from './components/Feed/Twitt'
import Register from './components/Login/Register'
import CrearTwitt from './components/Feed/CrearTwitt'


class App extends React.Component {

  constructor(){
    super();
    this.token = localStorage.getItem('token');
}

  render() {
    return (
      <div className="App">
          <Header/>
          <Container>
            <Row>              
              <Col md="12">
                <Router>

                    <div  className="mui--align-middle" style={{marginTop:'15px'}}>   
                      {
                        this.token ?
                        <div>
                          <Route path="/" exact={true} component={Twitt}/>
                          <Route path="/tweets" exact={true} component={Twitt}/>
                          <Route path="/creartwitt" exact={true} component={CrearTwitt}/>
                        </div>
                        :
                        <div>
                          <Route path="/" exact={true} component={Login}/>  
                          <Route path="/register" exact={true} component={Register}/>
                        </div>
                      }
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
