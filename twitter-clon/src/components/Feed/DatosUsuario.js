import React from 'react'

class DatosUsuario  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author : {}
          }
    }

    render() { 
        return ( 
            <div className="panel-footer panel-radius">
                 <div className="valor">Autor:<span className="panelUserData">{this.state.author.name} </span></div>
                 <div className="valor">Website:<span className="panelUserData"> {this.state.author.lastname}</span></div>
                 <div className="valor">Mail:<span className="panelUserData">{this.state.author.email}</span></div>
            </div>
         )
    }
}
 
export default DatosUsuario