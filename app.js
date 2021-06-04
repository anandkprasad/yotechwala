
var express = require('express');
var bodyParser  = require("body-parser");

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get('/about', function(req, res){
    res.render('about.ejs');
})

app.listen(process.env.PORT, function(){
    console.log("YoTechWala server started on port")
})