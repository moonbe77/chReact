import React from 'react'

class LifeCycle extends React.Component {
    constructor(props){
        super(props)
        console.log('soy constructor')
        this.state = {
            counter : 100
        }
    }

    componentWillMount(){
         console.log('me voy a renderizar')
    }

    render(){
        console.log('soy render')
        return (
            <div> 
                {this.state.counter}
            </div>
            )
    }

    componentDidMount(){ //si cargo consultas desde servidor o apis lo hago desde este metodo
        console.log('ya me renderice!!')
        setTimeout( () => {
            this.setState({
                counter : 20
             })
        },1500)
    }

    componentWillUnmount(){
        console.log('soy will unmount')
    }
}

export default LifeCycle