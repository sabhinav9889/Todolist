const express = require('express');
const bodyParser = require('body-parser');
const { reset } = require('nodemon');
const e = require('express');
const dr = require(__dirname+'/public/javascripts/week.js');

var d = dr.getdate();

const app = express();

let items = [];

let worklist = [];

let ele;

app.set('view engine', 'ejs');      

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static("public"));

app.get('/', function(req, res){

    res.render('week',{listtitle:d, listitems:items});

});


app.post('/', function(req, res){
    ele = req.body.newItem;
    let val = req.body.button;
    if(val=='Work'){  
        worklist.push(ele); res.redirect('/work');
    }
    else{ 
        items.push(ele);  res.redirect('/');
    }
});

app.get('/work', function(req, res){
    res.render('week',{listtitle:'Work List!', listitems:worklist});
});

app.post('/work', function(req, res){
    ele = req.body.newItem;
    res.redirect('/');
});

app.listen(3000, function(){
    console.log("Server is listening on local host 3000");
});