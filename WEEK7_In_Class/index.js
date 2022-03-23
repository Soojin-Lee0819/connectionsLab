//Server with Express
let express = require('express');
const res = require('express/lib/response');
let app = express();

let Datastore = require('nedb');

//tell your express app to accept json information and parse it 
app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }));

//initialize database
let db = new Datastore({
    filename:'posts.db',
    timestampData: true
});//creates a new one if needed
db.loadDatabase();//loads the db with the data

app.use('/', express.static('public'));
  
app.post('/message',(req,res)=> {
    console.log(req.body);
    let currentDate = Date();
    let obj = {
        date: currentDate,
        name: req.body.name,
        post: req.body.post
    }
    //add it into the database?
    db.insert(obj,(err, newDocs)=>{
        if(err) {
            res.json({task: "task failed"});
        } else {
            res.json({task:"success"});
        }

    })


})

//add route to get all coffee track information
app.get('/messages', (req,res)=> {

    db.find({}, (err, docs)=> {
        if(err) {
            res.json({task: "task failed"})
        } else {
            let obj = {data: docs};
            res.json(obj);
        }

    })

})

//what port whould we listen to?
app.listen(7000, () => {
    console.log("the server is up and running");
  })

