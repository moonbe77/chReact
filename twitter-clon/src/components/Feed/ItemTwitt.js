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
        return ( 
            <Panel>                        
                {/*<div className="panel-header panel-radius mui--text-center mui--text-title">
                    {index + 1 +'. '+t._id}
                </div>*/}
                {<DatosUsuario author={this.props.author}/>}
                <Divider/>
                <div className="panel-body">
                    {this.props.message}
                </div>

            </Panel> 
         )
    }
}
 
export default ItemTwitt;