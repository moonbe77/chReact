import React from 'react'
import UsersInPost from './UsersInPost'

class PostItem extends React.Component{
    constructor (props){
        super(props)

        this.state = {
            title: props.title,
            body: props.body,
            index: props.index
        }
    }

    render(){
        return(            
            <div>
                <UsersInPost userId={this.props.userId}/>
                { this.props.index + '.'+ this.props.title }
                <br/>
                { this.props.body }
                <br/>
                <hr/>
            </div>
        )
    }
}

export default PostItem