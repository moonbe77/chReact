import React from 'react';
import PostItem from '../Post/PostItem'

class PostList2 extends React.Component {

    constructor(){
        super();
        this.state = {
            posts : [],
            users : []
        }
    }

    componentDidMount(){
        console.log('Voy a buscar los posts');
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json()) // es lo mismo que function (response) { return response.json()}
            .then( posts => {
                //console.log(posts);
                this.setState({ posts: posts })
            })
            .catch( err => console.log(err) )
           

        fetch ('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json() )
            .then ( users => {
                this.setState({users : users})
                //console.log(this.state.users) 
            })
            .catch( err => console.log(err) )

            /*
            Promise
                .all([this.state.users, this.state.posts])
                .then( function (values){
                    let usuarios = JSON.parse(values[0])
                    console.log('usuarios:'+ usuarios)
                    let posteos = JSON.parse(values[1])                    
                })
                .then( function (lista){
                    console.log(lista)
                })
                .catch ( err => console.log(err))
                */
    }

    render(){
        console.log('renderizo la pantalla');
        console.log(this.state.users)
        return (
            <div>
                {
                //this.state.posts.length ? this.state.posts.length : 'Cargando Posts....'
                this.state.posts.length ? //el ? hace referencia a un if ternario (if one line)
                    this.state.posts.map(function(p, index){ 
                        // la p es post uno solo. index es el indice de la iteracion de map
                        //console.log(this.state.posts)
                        return (
                            <PostItem index={index} body={p.body} title={p.title} userId={p.userId}/>
                        )
                    })
                    : //: es por el if one line
                    'Cargando Posts....'
                }
            </div>
        )
    }
}

export default PostList2;