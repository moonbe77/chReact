import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

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
            <form>
                <ControlLabel>Usuario</ControlLabel>
                <FormControl type="text" />
                <ControlLabel>Password</ControlLabel>                
                <FormControl type="password"/>
                <Button>Login!</Button>
                <Button bsStyle ="primary">Reset</Button>
            </form>
        )
    }
}

export default Login;