import React from 'react';
import PostItem from '../Post/PostItem'

class PostList2 extends React.Component {

    constructor(){
        super();
        this.state = {
           // posts : [],
            //users : [],
            all : []
        }
    }

    componentDidMount(){
        console.log('Voy a buscar los posts');
                //con esta fomra la usao para pasarle propiedad userId 
            /*fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json()) // es lo mismo que function (response) { return response.json()}
                .then( posts => {
                    //console.log(posts);
                    this.setState({ posts: posts })
                })*/
                
        let postsAll = fetch('https://jsonplaceholder.typicode.com/posts/')
        let usuariosAll = fetch('https://jsonplaceholder.typicode.com/users/')
        let datos =[postsAll,usuariosAll]

        Promise
            .all(datos)
            .then( response =>  Promise.all(response.map(r => r.json())))
            .then( datos =>{                  
                console.log(datos)
                
                let posteos =  datos[0]
                let usuarios = datos[1]
                this.setState({ posts : posteos})
                this.setState({ users : usuarios})

                let postCompleto = posteos.map(function(p, index){
                    let id = p.userId
                    //console.log(p.userId)

                    let usr = usuarios.find( u =>{  
                        return u.id == id
                    })  

                    p.userId = usr
                    return p
                })

                return postCompleto
            })
            .then( lista =>{
                this.setState({ all : lista })
                console.log(lista)
            })
            .catch ( err => console.log(err))
        }
        
        render(){
            console.log('renderizo la pantalla');
            return (
                <div>
                <div>ALL:{/*this.state.all*/}</div>
                {
                    //this.state.posts.length ? this.state.posts.length : 'Cargando Posts....'
                    this.state.all.length ? //el ? hace referencia a un if ternario (if one line)
                    
                    this.state.all.map(function(p, index){    
                        //console.log(p)            
                        // la p es post, uno solo. index es el indice de la iteracion de map
                        return (
                            <PostItem index={index} body={p.body} title={p.title} userId={p.userId} key={index}/> //la propiedad key es para que react indexe mejor los componentes, se le pusede pasar cualquier valor que sea unico
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