import React from 'react';
import { Link } from 'react-router-dom';
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

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            user : {
                email : '',
                password : '',
            },         
            show : false,
            login : false
        }
    }

    generateHandleAttribute = (attributeName) => {
        return (event) =>{
            let user = this.state.user
            user[attributeName] = event.target.value
            this.setState({user})
        }
    }

    login = (e) => {
        e.preventDefault()
        console.log(this.state)
     fetch('http://159.203.190.127:4000/login',{
         method : 'POST',
         headers : {
            'Content-Type' : 'application/json'
         },
         body : JSON.stringify(this.state.user)
     })
     .then( response => response.json())
     .then( data =>{
         localStorage.setItem('token',JSON.stringify(data.token))
         console.log(data)
         if (data.token){
             window.location.href = '/twitts'
         }else{
             alert(data.message)
         }
     })       
    }
    
    componentDidMount(){
        this.setState({ show: true})
        console.log(this.state.show)
        
    }

    test = () =>{
        this.setState({show : false})
    }

    render(){       
        //console.log(this.state) 
        return(   
            <div>             
                <Fade in={this.state.show}> 
                <div>               
                    <Container fluid={true}>
                        <Row>
                            <Col sm="12" md-offset="2" md="8" > 
                                <Panel>    
                                    <Form className="mui--text-center">
                                        <legend>Inicia Sesión</legend>
                                        <Input placeholder="Email"  onChange={this.generateHandleAttribute('email')}/>                                
                                        <Input placeholder="password" onChange={this.generateHandleAttribute('password')}/> 
                                        <Button color="primary" onClick ={this.login} >Login</Button>
                                        <Button color="primary" variant="flat" type="reset" size="small">Reset</Button>
                                    </Form>             
                                </Panel>   
                                <div><Link to={'/register'}><Button variant="flat" size="small">Registrate!</Button></Link> </div>                        
                            </Col>
                        </Row>
                    </Container>
                -</div>
                </Fade> 
                
            </div>       


        )
    }
}

export default Login;