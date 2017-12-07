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
            user : {
                name : '',
                lastname : '',
                email : '',
                password : '',
            },
            show : false,
            login : false,
            emailIsValid : false
        }
    }

    generateHandleAttribute = (attributeName) => { 
      return (event) =>{
        let user = this.state.user
        let validarEmail = this.state.emailIsValid
        user[attributeName] = event.target.value
        this.setState({user})      
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
     .then( response => response.json())
     .then( data =>{         
         console.log(data)
         if (data.name == this.state.user.name){
             window.location.href = '/'
         }else{
             alert('algo salio mal')
         }
     })       
    }
    
    validarEmail = valor => {
        console.log('validar email'+ valor)
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})/.test(valor)){
            console.log(true)
         this.setState({emailIsValid : true})
        } else {
            console.log(false)            
            this.setState({emailIsValid : false})
            
        }
            
      }

    componentDidMount(){
        this.setState({ show: true})
        console.log(this.state.show)        
    }

    render(){        
       // console.log(this.state)
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
                                    className={this.state.user.name.length < 3 ? 'error' : 'ok'} 
                                    placeholder="Name" 
                                    onChange={this.generateHandleAttribute('name')}/> 

                                    <Input className={this.state.user.lastname.length < 3 ? 'error' : 'ok'} 
                                    placeholder="lastName" 
                                    onChange={this.generateHandleAttribute('lastname')}/>        

                                    <Input className={this.emailState ? 'ok' : 'error'} 
                                    placeholder="Email"  
                                    onChange={this.generateHandleAttribute('email')}/>

                                    <Input className={this.state.user.name.length < 3 ? 'error' : 'ok'} 
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