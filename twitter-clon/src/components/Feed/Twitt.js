import React from 'react'
import './Twitt.css'
import { Panel, Divider } from 'muicss/react';
import DatosUsuario from './DatosUsuario'

class Twitt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
               postsCompleto : []
         }
    }

componentDidMount(){

 Promise.all([
         fetch('https://jsonplaceholder.typicode.com/posts'),
        fetch('https://jsonplaceholder.typicode.com/users')
    ])
    .then(response => Promise.all(response.map(r => r.json())))
        .then( datos =>{        
            this.setState({ posts : datos[0]})
            this.setState({ users : datos[1]})
            console.log(this.state.users)
            console.log(this.state.posts)
            
            let PostMergeado = datos[0].map( p =>{
                let nuevoPost = Object.assign({},p)
                nuevoPost.user = datos[1].find( u => u.id == p.userId )
                delete nuevoPost.userId
                return nuevoPost
            } )
            return PostMergeado
        })
        .then( postsConUsuarios => {
            console.log(postsConUsuarios)
            this.setState({ postsCompleto : postsConUsuarios})
        })
}


    render() { 
    console.log(this.state.postsCompleto)
    //onsole.log(this.state.posts)
        return ( 
          <div>
              {
                  this.state.postsCompleto.length  ? this.state.postsCompleto.map( (p,index) =>{
                    return (
                        <Panel key={index}>                        
                            <div className="panel-header panel-radius mui--text-center mui--text-title">
                                {index + 1 +'. '+p.title}
                            </div>
                            <Divider/>
                            <div className="panel-body">
                                {p.body}                
                            </div>

                            <DatosUsuario user={p.user}/>
                        </Panel> 
                    )
                } ): 'cargando.... posts'
              }
              
          </div>
         )
    }
}
 
export default Twitt;