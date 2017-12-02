import React from 'react'
//import { Link } from 'react-router-dom';
import { Appbar }  from 'muicss/react';


class Header  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
goToHome = ()=>{
    window.location.href = '/'
}
goToTwitts = ()=>{
    window.location.href = '/twitts'
}

    render() { 
        return ( 
            <div className="header">
            {/*<Link to={'/twitts'}>LINK</Link>*/}
                <Appbar>
                    <div className="mui--text-center mui--text-display3" onClick={this.goToHome}>Twitter Clon</div>                      
                    <div className="mui--text-left" onClick={this.goToTwitts}>Twitts</div>                      
                </Appbar>
            </div>
         )
    }
}
 


export default Header;