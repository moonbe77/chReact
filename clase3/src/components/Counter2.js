import React from 'react'

class Counter2 extends React.Component{

    constructor(props){
        super(props)
        console.log("Soy counter")
        this.state = {
            counter: props.inicio
        }
    }

    suma = (event) => {
        console.log("click boton")
        let nuevo = this.state.cunter + 1
        this.setState({ counter:  nuevo })        
    }
        
    render(){
        return(
            <div>
                <hr/>
            {this.state.counter}
                <br/>
            <button onClick={this.suma}>Sumate 1</button> 
            </div>
        )
    }
}

export default Counter2