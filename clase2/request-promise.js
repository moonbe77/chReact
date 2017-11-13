//npm install request-promise


//ejercicio con promesas tomar el listado de post y por cada post remplazar EL USERiD, POR EL objeto USER ENTERO

var requestPromise = require ('request-promise')

function postDetail (postId) {
    let respuesta = {};
    return requestPromise('https://jsonplaceholder.typicode.com/posts/' + postId)
        .then(function (data) {
            let post = JSON.parse(data);
            respuesta.post = post;
            return requestPromise('https://jsonplaceholder.typicode.com/users/'+ post.userId);
        })
        .then(function (data) {
            let user = JSON.parse(data);
            respuesta.user = user;
            return respuesta;
        });
}

/*postDetail(1)
    .then(function (respuesta) {
        console.log(`Nombre: ${respuesta.user.name}`)
        console.log(`UserName: ${respuesta.user.username}`)
        console.log(`Mail: ${respuesta.user.email}`)
        console.log(`Titel: ${respuesta.post.title}`)
        console.log(`Body: ${respuesta.post.body}`)
    })*/

for (var i = 0; i <= 5; i++) {
    postDetail(i)
    .then(function (respuesta) {
        console.log(`Nombre: ${respuesta.user.name}`)
        console.log(`UserName: ${respuesta.user.username}`)
        console.log(`Mail: ${respuesta.user.email}`)
        console.log(`Titel: ${respuesta.post.title}`)
        console.log(`Body: ${respuesta.post.body}`)
        console.log(`**************************************`)
        console.log(`**************************************`)
    }).catch(function (err){
        console.log(err)
    })
    
}    