import React from 'react'
import './Twitt.css'
import { Panel, Divider } from 'muicss/react';
import DatosUsuario from './DatosUsuario'

class Twitt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
               twitts : []
         }
    }

componentDidMount(){
console.log(localStorage.getItem('token'))
 
    fetch('http://159.203.190.127:4000/tweets',{
        headers: {
            "Content-Type": "application/json",
            "x-access-token": localStorage.getItem('token')
        },
        method: 'GET' // opcional
    })
    .then(response => { response.json() })
    .then( datos =>{        
            this.setState( {twitts =  datos} )
            console.log(this.state.twitts)           
        })
    .catch(err => console.log(err))
        
}


    render() { 
    console.log(this.state.postsCompleto)
    //onsole.log(this.state.posts)
        return ( 
          <div>
              {
                  this.state.twitts.length  ? this.state.twitts.map( (p,index) =>{
                    return (
                        <Panel key={index}>                        
                            <div className="panel-header panel-radius mui--text-center mui--text-title">
                                {index + 1 +'. '+p._id}
                            </div>
                            <Divider/>
                            <div className="panel-body">
                                {p.message}                
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