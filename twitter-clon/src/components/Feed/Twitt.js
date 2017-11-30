import React from 'react';
import { Panel } from 'react-bootstrap';

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
              <Panel header={this.state.name}>
                {this.state.twitt}
              </Panel>
          </div>
         )
    }
}
 
export default Twitt;