//Initialize the express 'app' object
let express = require('express');
let app = express();
app.use('/', express.static('public'));


//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);

//Initialize socket.io
let io = require('socket.io');
io = new io.Server(server);

let inputSockets = io.of('/input');
let outputSockets = io.of('/output');

let noVotesA =0;
let noVotesB =0;

//connect socket
inputSockets.on('connect',(socket)=>{
    console.log('socket connected to input namespace', socket.id);
    //add vote to vote A
    socket.on('votedA',()=> {
        noVotesA++;
        console.log("voteA:", noVotesA, "voteB:", noVotesB)
        //send the updated information to the sockets in output namespace
        let data = {
            a:noVotesA,
            b:noVotesB
        }
        outputSockets.emit('votes',data)
    })

    //add vote to vote B
    socket.on('votedB',()=> {
        noVotesB++;
            //send the updated information to the sockets in output namespace
            let data = {
                a:noVotesA,
                b:noVotesB
            }
            outputSockets.emit('votes',data)
        console.log("voteA:", noVotesA, "voteB:", noVotesB)
    })

    socket.on('disconnect',()=> {
        console.log('socket disconnected from input name', socket.id); 
    })
})

//connect socket
outputSockets.on('connect',(socket)=>{
    console.log('socket connected to output namespace', socket.id);

    socket.on('disconnect',()=> {
        console.log('socket disconnected from input name', socket.id); 
    })
}
)


//run the createServer
let port = process.env.PORT || 1000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});
