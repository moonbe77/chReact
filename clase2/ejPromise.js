 // Tomar el listado de posts
// y por cada post reemplezar el userId por el user.

const requestProm = require('request-promise');

let posteos = {}

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

/*postDetail(1)
    .then(function (respuesta1) {
        console.log(respuesta1);
    });

postDetail(2)
    .then(function (respuesta2) {
        console.log(respuesta2);
    });*/

let promDetail1 = postDetail(1);
let promDetail2 = postDetail(2);
/*
Promise.all([promDetail1, promDetail2])
    .then(function (details) {
        let detail1 = details[0];
        let detail2 = details[1];

        console.log(detail1);
        console.log(detail2);
    });*/

let promUsers = requestProm('https://jsonplaceholder.typicode.com/users/');
let promPosts = requestProm('https://jsonplaceholder.typicode.com/posts/');

Promise
    .all([promUsers, promPosts])
    .then(function (values) {
        let users = JSON.parse(values[0]);
        let posts = JSON.parse(values[1]);
        //console.log(users)

        /*let lista = posts.map(function(u){
           // return posteos += JSON.stringify(u)
            let value = posts.find(function (u) {
                return (u.id == 10)
                //return (u == 1);
            });
        })*/
        
        // Tomar el listado de posts
        // y por cada post reemplezar el userId por el user.

        let addUsers = posts.map(function(p,users){
            let add = Object.assign({},p)
            let addUsers = users.find(function (p){
                return (add.userId = users.id)
            }) 
            //add.userId = 'test'
            console.log(add)
            return add
        })
        return addUsers
    })
    .then(function (listaCompleta) {
        console.log('**************************************')   
        console.log('lista Completa: '+ JSON.parse(listaCompleta));        
    })
    /*.catch(function (err) {
        console.log(err);
    });*/
