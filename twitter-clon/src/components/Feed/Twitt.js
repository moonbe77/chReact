import React from 'react'
import './Twitt.css'
import { Panel, Divider, Container, Row, Col  } from 'muicss/react';

class Twitt extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
                name : 'Bernardo Munz',
                twitt : 'lipsumlipsumlipsum lipsumlipsumlipsumlipsumlipsumlipsumlipsum lipsumlipsumlipsumlipsumlipsumlipsumlipsum lipsumlipsumlipsumlipsumlipsumlipsumlipsum lipsumlipsumlipsumlipsumlipsumlipsumlipsum lipsumlipsumlipsumlipsumlipsumlipsumlipsum lipsumlipsumlipsumlipsumlipsumlipsumlipsum lipsumlipsumlipsumlipsum '
         }
    }
    render() { 
        return ( 
          <div>
              <Panel>
                <div className="panel-header mui--text-title">
                    {this.state.name}
                </div>
                <Divider/>
                <div className="panel-body">
                    {this.state.twitt}                
                </div>
              </Panel>
          </div>
         )
    }
}
 
export default Twitt;