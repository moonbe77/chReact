import React from 'react'
import { Panel, Divider } from 'muicss/react'
import DatosUsuario from './DatosUsuario'

class ItemTwitt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            datos : []
         }
    }
    
    render() { 
        console.log(this.props.tweet)
        return ( 
            <Panel className="panel-radius">                        
                {/*<div className="panel-header panel-radius mui--text-center mui--text-title">
                    {index + 1 +'. '+t._id}
                </div>*/}
                {<DatosUsuario author={this.props.tweet.author}/>}
                <Divider/>
                <div className="panel-body">
                    {this.props.tweet.message}
                </div>

            </Panel> 
         )
    }
}
 
export default ItemTwitt;