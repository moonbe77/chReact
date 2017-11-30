import React from 'react'
import UsersInPost from '../User/UsersInPost'

class PostItem extends React.Component{
    constructor (props){
        super(props)
        
        this.state = {
            title: props.title,
            body: props.body,
            index: props.index,
            user: props.user        
        }
    }
    
    apreto = () => {
        console.log('test')
    }   
    
    render(){
        return(            
            <div>
                <div className="user">               
                    <UsersInPost usuario={this.state.user}/>
                 </div>
                <br/>
                <strong>{ this.props.index + 1 + '.'+ this.state.title }</strong>
                <br/>
                <br/>
                { this.state.body }
                <hr/>
                <button onClick={this.apreto}>Like</button>
                <button onClick={this.apreto}>Edit</button>
                <button onClick={this.apreto}>Delete</button>
                <hr/>
            </div>
        )
    }
}

export default PostItem