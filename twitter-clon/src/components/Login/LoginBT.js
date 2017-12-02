import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button, ButtonGroup, ButtonToolbar, Grid, Row, Col, Well } from 'react-bootstrap';


class Login extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    //generarar handle attribute
    //login

    render(){
        return(
            <Grid>
            <Row className="show-grid">
                <Col xs={12} md={4}><h3>Inicia sesion para ver el feed de twits</h3></Col>
                <Col xs={6} md={4}> 
                    <Well>
                        <form>
                            <ControlLabel>Usuario</ControlLabel>
                            <FormControl type="text" />

                            <ControlLabel>Password</ControlLabel>                
                            <FormControl type="password"/>

                            <ControlLabel></ControlLabel>
                            
                            <ButtonToolbar className="center-align">
                                <Button bsStyle ="primary">Login!</Button>
                                <Button bsStyle="info" type="reset" >Reset</Button>
                            </ButtonToolbar>    
                        </form>                        
                    </Well>  
                </Col>
                <Col xs={6} md={4}><Button>Registrate!</Button></Col>
            </Row>
          </Grid>
         
        )
    }
}

export default Login;