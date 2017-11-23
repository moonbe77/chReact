import React from 'react';

 class Login  extends React.Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password :''
        }
    }

    handleEmail = (event) => {
        console.log(event.target.value)
        this.setState({ email : event.target.value })
    }

    render() {
        console.log(this.state)
        return (
            <div>
            <div>LOGIN</div>
            email: <input onChange = { this.handleEmail.value }/>
            <br/>
            Pass: <input />
            <br/>
            <button>LOGIN</button>
            </div>
        );
    }
}

export default Login 