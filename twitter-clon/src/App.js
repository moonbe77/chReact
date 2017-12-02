import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Twitt from './components/Feed/Twitt';
import { Container, Col, Row }  from 'muicss/react';




class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Router>
          <Header/>
      </Router>
          <Container>
            <Row>
              <Col md="3">{
                window.location.pathname == '/' ?  
                'Inicia sesion para ver los twits' 
                : 'Lista de Usuarios'}
              </Col>  
              <Col md="9">
                <Router>
                  <div  className="mui--align-middle" style={{marginTop:'15px'}}>
                  {console.log(this.props.location)}
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
