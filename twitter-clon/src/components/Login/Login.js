import React from 'react';
import { Form , Input, Button, Panel, Container, Row, Col }  from 'muicss/react';


class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }
    }

    generateHandleAttribute = (attributeName) => {
        return (event) =>{
            let newState = {}
            newState[attributeName] = event.target.value
            this.setState(newState)
        }
    }

    login = () => {
        console.log(this.state)
        //this.setState({ loading : 'true' })
            console.log('inicio login')
           // this.setState({ loading : 'false' })
            window.location.href = '/twitts'
        console.log(this.state)        
    }
    
    render(){
        return(  
            <Container fluid={true}>
                <Row>
                    <Col sm="12" md-offset="2" md="8" >     
                        <Panel>    
                            <Form>
                                <legend>Inicia Sesión</legend>
                                <Input placeholder="Email"  onChange={this.generateHandleAttribute('email')}/>                                
                                <Input placeholder="password" onChange={this.generateHandleAttribute('password')}/>                                
                                <Button color="primary" onClick ={this.login} >Login</Button>
                                <Button color="primary" variant="flat" type="reset" size="small">Reset</Button>
                            </Form>             
                        </Panel>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Login;