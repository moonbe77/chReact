import React from 'react';

class Form extends React.Component  {
    constructor() {
        super()
        this.state = {
            username : '',
            password : ''
        }
    }

    login = () => {
        console.log(this.state)
    }

    handleUsername = (event)=> {
        console.log('Cambio el nombre!')
        console.log(event.target.value)
        this.setState({username : event.target.value})
        console.log()
    }
    handlePasword = (event)=> {
        console.log('Cambio el nombre!')
        console.log(event.target.value)
        this.setState({password : event.target.value})
        console.log()
    }

render(){
    console.log('render')
    return(
        <div>
            <label>Username</label>
            <input onChange={this.handleUsername} type="test"/>
            {this.state.username.length < 3 ? 'faltan caracteres' : ''}
            <br/>
            <label>Password</label>   
            <input onChange={this.handlePasword} type="password"/>
            {this.state.password.length < 6 ? 'mas de 6 caracteres' : ''}
            <br/>
            <button onClick={this.login} >send</button>
        </div>
    )
}

}

export default Form