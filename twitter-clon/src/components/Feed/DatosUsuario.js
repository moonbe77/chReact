import React from 'react'

class DatosUsuario  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuarios : {}
          }
    }

    render() { 
        return ( 
            <div className="panel-footer panel-radius">
                 <div className="valor">Autor:<span className="panelUserData">{this.props.user.username} </span></div>
                 <div className="valor">Website:<span className="panelUserData"> {this.props.user.website}</span></div>
                 <div className="valor">Mail:<span className="panelUserData">{this.props.user.email}</span></div>
            </div>
            
         )
    }
}
 
export default DatosUsuario