import React from 'react'
import { CSSTransition, TransitionGroup} from 'react-transition-group'; // ES6

const Fade = ({ children, ...props }) => (
      <CSSTransition
        {...props}
        timeout={1000}
        classNames="fade">

        {children}
      </CSSTransition>
    );

class Trasnsition extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        items: ['hello', 'world', 'click', 'me']
      };
      this.handleAdd = this.handleAdd.bind(this);
    }


    handleAdd() {
      const newItems = this.state.items.concat([
        prompt('Enter some text')
      ]);
      this.setState({items: newItems});
    }
  
    handleRemove(i) {
      let newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
    }
  
    render() {   
  
      return (
        <div className='container '>
            <TransitionGroup>
              {this.state.items.map((item, i) => (
                <Fade key={item}>
                  <div>
                    {`${item} `}
                    <button onClick={() => this.handleRemove(i)}>
                      &times;
                    </button>
                  </div>
                </Fade>
              ))}
            </TransitionGroup>
            <button onClick={() => this.handleAdd()}>Add Item</button>
      </div>
      );
    }
  
}

export default Trasnsition