import React from 'react'

class Counter extends React.Component{

    constructor(){
        super()
        console.log("Soy counter")
        this.state = {
            counter: 0
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

export default Counter