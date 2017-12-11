import React from 'react'
import { Form , Textarea, Button, Panel, Container, Row, Col }  from 'muicss/react';


class CrearTwitt  extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user : '',
         message : 'Te envio mi twitt!'
            
        }
    }

    generateHandleAttribute = (message) => {
        return (event) =>{
            message = event.target.value
            this.setState({ message })
        }
    }
    
    enviar = (e) =>{
        e.preventDefault()        
        fetch('http://159.203.190.127:4000/tweets',{
            method : 'POST',
            headers : {
                "Content-Type": "application/json",
                "x-access-token": localStorage.getItem('token')
            },
            body : JSON.stringify(this.state.message)
        })
        .then( response => response.json())
        .then( data =>{
            console.log(data)         
        })       
       }


    render() {
        console.log(this.state.message)
        return (
            <div>
            <Panel>
                Crear Twitt
                <Form className="mui--text-center formulario">
                    <Textarea placeholder="Textarea"  onChange={this.generateHandleAttribute('message')} />
                    <Button color="primary" onClick={this.enviar}>Enviar</Button>
                    <Button color="primary" variant="flat" type="reset" size="small">Reset</Button>
                </Form>
            </Panel>
            </div>
        );
    }
}

export default CrearTwitt