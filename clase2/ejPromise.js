 // Tomar el listado de posts
// y por cada post reemplezar el userId por el user.


const requestProm = require('request-promise');

function postDetail (postId) {
    let respuesta = {};
    return requestProm('https://jsonplaceholder.typicode.com/posts/' + postId)
        .then(function (data) {
            let post = JSON.parse(data);
            respuesta.post = post;
            return requestProm('https://jsonplaceholder.typicode.com/users/'+ post.userId);
        })
        .then(function (data) {
            let user = JSON.parse(data);
            respuesta.user = user;
            return respuesta;
        });
}

postDetail(1)
.then(function (respuesta1) {
    console.log(respuesta1);    
});
