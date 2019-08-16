const express=require('express')
const app=express()
const path=require('path')
const bodyParser=require('body-parser')
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';


app.use(express.urlencoded())
app.use('public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/',function(req,res)
{ 
    res.render('index');
});

app.listen(3000,function(){console.log('app listening on')});

 app.get('/gt',(req,res)=>{
    res.render(('index'));
    MongoClient.connect(url, { useNewUrlParser: true },function(err, client) {

        //search and filter
        console.log("Connected successfully to server");
        const db = client.db('trial');
        var query = { district: bangalore};
        db.collection("trialfield").find(query).execute(function(err, result) {
          if (err) throw err;
          console.log(result);
          res.render('index',{docs: {docs:result}});

        })
    })
});

app.post('/getdata', (req, res) => {
    const src = req.body.src;

   // var str="Search is: "+src +", Category is "+cat+", moi is : "+moi+" ,gender is "+gen+" ";
    console.log(src)
    res.end()
//------------------------------------
    MongoClient.connect(url, { useNewUrlParser: true },function(err, client) {

        //search and filter
        console.log("Connected successfully to server");
        const db = client.db('trial');
        var query = { district: src};
        var col=db.collection("trialfield")
        
        console.log(col)
            
        })
    })
  

