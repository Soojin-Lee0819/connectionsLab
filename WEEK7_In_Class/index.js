//Server with Express
let express = require('express');
const res = require('express/lib/response');
let app = express();

let Datastore = require('nedb');

//tell your express app to accept json information and parse it 
app.use(express.json());
// app.use(express.urlencoded)({
//     extended:true
// });

//initialize database
let db = new Datastore({
    filename:'posts.db',
    timestampData: true
});//creates a new one if needed
db.loadDatabase();//loads the db with the data

//app variables
let posts=[];

app.use('/', express.static('public'));
  
app.post('/message',(req,res)=> {
    console.log(req.body);
    //add it into the database?
db.insert(req.body, function(err,newDoc){
    console.log(newDoc)
})

    res.json({"message":"OK"});
})

app.get('/messages',(req,res)=>{
    let dataToSend;
    db.find({},function(err,docs){
        console.log(docs);
        dataToSend = {data: docs};
        res.json(dataToSend);
    });
    // let dataToSend = {
    //     "posts" : posts
    // };
    // console.log(req);
    // res.json(dataToSend);
    // console.log(posts);
});

//what port whould we listen to?
app.listen(7000, () => {
    console.log("the server is up and running");
  })

