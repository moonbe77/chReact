import React from 'react'
import { Form , Input, Button, Panel, Container, Row, Col }  from 'muicss/react';


class CrearTwitt  extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            datos : ''
        }
    }
    
    enviar = () =>{

    }


    render() {
        return (
            <div>
            <Panel>
                Crear Twitt
                <Form>
                    <Input/>
                    <Input/>
                    <Button>Enviar</Button>
                </Form>
            </Panel>
            </div>
        );
    }
}

export default CrearTwitt