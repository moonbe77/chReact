//npm install request

const request = require ('request')

let users
request("https://jsonplaceholder.typicode.com/users", function(err, response, users){
    users = JSON.parse(users)
    request("https://jsonplaceholder.typicode.com/posts", function(err, response, post){
        console.log(users[0].name)
        var dataPosts = JSON.parse(post)
       console.log(dataPosts[0].title)        
    })
})

