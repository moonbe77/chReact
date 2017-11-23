import React from 'react';

 class PostForm extends React.Component {
     constructor(){
         super()
         this.state = {
             post : '',
             body : '',
             status : ''
         }
     }

     guardar =() =>{
         console.log('guarde')
     }

    render() {
        return (
            <div>
                <h2>Agrega un Post</h2>  
                <input/>
                <input />
                <button >Guardar</button>
            </div>
        );
    }
}

export default PostForm