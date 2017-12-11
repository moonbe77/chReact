import React from 'react'
//import { Link } from 'react-router-dom';
import { Appbar, Button }  from 'muicss/react';


class Header  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            token : localStorage.getItem('token')            
        }
    }
goToHome = ()=>{
    window.location.href = '/'
}
goToTwitts = ()=>{
    window.location.href = '/'
}
goToCrearTwitt = ()=>{
    window.location.href = '/creartwitt'
}
logOut = () =>{
    localStorage.removeItem('token')
    window.location.href = '/'    
}

    render() { 
        return ( 
            <div className="header">
            {/*<Link to={'/twitts'}>LINK</Link>*/}
                <Appbar>
                    <div className="mui--text-center mui--text-display3 mui--align-middle" onClick={this.goToHome}>Twitter Clon</div>                    <div className="mui--align-middle mui--text-center">
                    {
                        this.state.token ?
                            <div>
                                <Button variant="flat" onClick={this.goToTwitts}>Twitts</Button>                      
                                <Button variant="flat" onClick={this.goToCrearTwitt}>CrearTwitt</Button>                     
                                <Button variant="flat" onClick={this.logOut}>Salir</Button>
                            </div>
                            :
                            <div>                              
                                
                            </div>
                    }
                    </div>
                </Appbar>
            </div>
         )
    }
}
 


export default Header;