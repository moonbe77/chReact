//npm install request

const request = require ('request')

request("https://jsonplaceholder.typicode.com/users", function(err, response, users){
    request("https://jsonplaceholder.typicode.com/users", function(err, response, post){
        console.log(users[0].name)
        console.log(JSON.parse(post[0]))
        
    })
})