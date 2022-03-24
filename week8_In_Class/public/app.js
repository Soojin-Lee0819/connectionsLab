 // opens and connect to socket
 let socket = io();

 //p5 variables
 let r,g,b;

 //listen for confirmation
socket.on('connect', () => {
     console.log("client connected via sockets");
 })
 


 //p5 code
function setup() {
    createCanvas(400,400);
    background(220);
    r = random(0,255);
    g = random(0,255);
    b = random(0,255);
    shape = floor
    socket.on('mouseDataFromServer', (data)=>{
        drawEllipseWithData(data);
        //console.log(data);   (temporaily stop to increase the flow)
    })
}

//emit information of mous position everytime mouse moves
function mouseDragged() {
    let mousePos = 
    {   x:round(mouseX), 
        y:round(mouseY),
        red:r,
        blue:b,
        green:g,
        shape: shape
    };
    //emit htis information to the server
    socket.emit('mousePositionData',mousePos);
}

function drawEllipseWithData(data) {
    fill(data.red,data.green,data.blue);
    if(data.shpae==0){
        ellipse(data.x,data.y,10,10);
    } else {
        rect(data.x,data.y,10,10);
    }
 
}