import React from 'react'
import UsersInPost from '../User/UsersInPost'

class PostItem extends React.Component{
    constructor (props){
        super(props)
        
        this.state = {
            title: props.title,
            body: props.body,
            index: props.index,
            userId: props.userId        
        }
    }
    
    apreto = () => {
        console.log('test')
    }   
    
    render(){
        return(            
            <div>
                <div className="user">               
                    <UsersInPost usuario={this.props.userId}/>
                 </div>
                <br/>
                <strong>{ this.props.index + '.'+ this.props.title }</strong>
                <br/>
                <br/>
                { this.props.body }
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