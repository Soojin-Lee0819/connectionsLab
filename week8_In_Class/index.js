console.log("this is index.js")

let express = require('express');
let http = require('http');
let io = require('socket.io');


let app = express();
let server = http.createServer(app); // wrap the express app with http
io = new io.Server(server) // use socket.io on the http app



app.use('/', express.static('public'));


//when a socket connects, take the socket 
io.sockets.on('connection',(socket)=> {
    console.log("we have", socket.id);
    socket.on('disconnect',()=> {
        console.log('sockethas been disconnected',socket.id);
    })

//listen for a message from a client
    socket.on('mousePositionData',(data)=>{
        console.log(data);
        io.sockets.emit('mouseDataFromServer', data);
    })
})

//server listening on port
server.listen(9000,() => {
    console.log("sever is up and running")
});