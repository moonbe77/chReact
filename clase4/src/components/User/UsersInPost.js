import React, { Component } from 'react';
import './UserInPosts.css';

class UsersInPost  extends Component {
    
    constructor(props){
        super(props)
        this.state={
            user : {}
            }
    }

   componentDidMount(props) {
       //console.log(this.props.userId)
        //hacer un fetch de los nombres de los usuarios en cda post   
        //console.log('Voy a buscar el usuario');
        //console.log('user post: '+this.props.userId);
        fetch('https://jsonplaceholder.typicode.com/users/'+this.props.userId)
            .then(response => response.json()) // es lo mismo que function (response) { return response.json()}
            .then( user => {
               // console.log(user);
                this.setState({ user: user })
            });
    }

    render() {
        return (
            <div>
                {
               this.state.user.name ? 
                <div>
                    Autor: {this.state.user.name} - UserName: {this.state.user.username} - Mail: {this.state.user.email}
                </div>
                : 'cargando...'
                }
            </div>
        )
    }
}

export default UsersInPost