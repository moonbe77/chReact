import React from 'react'
import './Twitt.css'
import { Panel, Divider } from 'muicss/react'
import ItemTwitt from './ItemTwitt'

class Twitt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
               twitts : [],
               twitTest :  {
                "_id": "123456789",
                "message": "TWEET DE TEST",
                "author": {
                    "_id": "123456789ABC",
                    "name": "Berny",
                    "lastname": "Munz",
                    "email": "qwerty@qwerty.com",
                    "password": "123456",
                    "isAdmin": false,
                    "__v": 0
                },
                "__v": 0
            }
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
    .then(response => response.json() )
    .then( twitts => {        
        console.log(twitts)           
            this.setState( {twitts} )
    })
    .catch(err => console.log(err))
        
}

    render() { 
    console.log(this.state.twitts)
    //onsole.log(this.state.posts)
        return ( 
          <div>
              {
                  this.state.twitts.length  ? this.state.twitts.map( ( t, index ) =>{
                    return (
                        <ItemTwitt key={index} message={t.message}/> 
                    )
                } ): 'cargando.... posts'
              }
              
          </div>
         )
    }
}
 
export default Twitt;