import React from 'react';
import { Form , Input, Button, Panel, Container, Row, Col }  from 'muicss/react';
import { CSSTransition } from 'react-transition-group'; // ES6


const Fade = ({ children, ...props }) => (
    <CSSTransition
      {...props}
      timeout={1000}
      classNames="fade"
    >
      {children}
    </CSSTransition>
  );

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                name : '',
                lastName : '',
                email : '',
                password : '',
                show : false,
                login : false
        }
    }

    generateHandleAttribute = (attributeName) => {
        return (event) =>{
            let newState = {}
            newState[attributeName] = event.target.value
            this.setState(newState)
        }
    }

    login = (e) => {
        e.preventDefault()
        console.log(this.state)
     fetch('http://159.203.190.127:4000/register',{
         method : 'POST',
         headers : {
            'Content-Type' : 'application/json'
         },
         body : JSON.stringify(this.state.user)
     })       
    }
    
    validarEmail = valor => {
        console.log('validar email'+ valor)
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})/.test(valor)){
            console.log(true)
         return true
        } else {
            console.log(false)            
         return false
        }
      }

    componentDidMount(){
        this.setState({ show: true})
        console.log(this.state.show)        
    }

    render(){        
        console.log(this.state)
        return(   
            <div>             
            <Fade in={this.state.show}> 
            <div >               
                <Container fluid={true}>
                    <Row>
                        <Col sm="12" md-offset="2" md="8" > 
                            <Panel>    
                                <Form className="mui--text-center">
                                    <legend>Inicia Sesión</legend>
                                    <Input 
                                    className={this.state.name.length < 3 ? 'error' : 'ok'} 
                                    placeholder="Name" 
                                    onChange={this.generateHandleAttribute('name')}/> 

                                    <Input className={this.state.lastName.length < 3 ? 'error' : 'ok'} 
                                    placeholder="lastName" 
                                    onChange={this.generateHandleAttribute('lastName')}/>        

                                    <Input className={this.validarEmail(this.state.email) ? 'error' : 'ok'} 
                                    placeholder="Email"  
                                    onChange={this.generateHandleAttribute('email')}/>

                                    <Input className={this.state.name.length < 3 ? 'error' : 'ok'} 
                                    placeholder="password" 
                                    onChange={this.generateHandleAttribute('password')}/> 

                                    <Button color="primary" onClick ={this.login} > Registrar </Button>
                                    <Button color="primary" variant="flat" type="reset" size="small">Reset</Button>
                                </Form>             
                            </Panel>                          
                        </Col>
                    </Row>
                </Container>
                </div>
            </Fade>            
            </div>       


        )
    }
}

export default Register;