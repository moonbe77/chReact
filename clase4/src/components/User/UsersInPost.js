import React, { Component } from 'react';
import './UserInPosts.css';

class UsersInPost  extends Component {
    
    constructor(props){
        super(props)
        this.state={
            user : props.usuario
            }
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