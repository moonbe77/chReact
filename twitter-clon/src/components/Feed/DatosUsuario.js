import React from 'react'

class DatosUsuario  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author : {}
          }
    }

    render() { 
        console.log('AUTHOR' + this.props.author.name)
        return ( 
            <div className="panel-header">
                 <div className="valor">Autor:<span className="panelUserData">{this.props.name} </span></div>
                 <div className="valor">Website:<span className="panelUserData"> {this.props.lastname}</span></div>
                 <div className="valor">Mail:<span className="panelUserData">{this.props.email}</span></div>
            </div>
         )
    }
}
 
export default DatosUsuario