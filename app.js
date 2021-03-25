// C:\Program Files\MongoDB\Server\4.4\bin

var express = require('express');
var bodyParser  = require("body-parser");
var mongoose = require("mongoose");

var app = express();

// mongoose.connect('mongodb://localhost/yotechwala', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect('mongodb+srv://cluster0.dm9em.mongodb.net/database?retryWrites=true&w=majority', {
    auth: {
      user: "admin",
      password: "pass"
    },
    useNewUrlParser:true,
    useUnifiedTopology: true
      }).then(
        () => { 
            console.log("MongoAtlas Database connected.");
        },
        err => { 
            /** handle initial connection error */ 
            console.log("Error in database connection. ", err);
        }
    );

    
mongoose.set('useFindAndModify', false);


var contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

var Contact  = mongoose.model("Contact", contactSchema);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get("/portfolio/factforme", function(req, res){
    res.render("factforme.ejs");
});

app.get("/portfolio/yoclothwala", function(req, res){
    res.render("yoclothwala.ejs");
});

app.get("/portfolio/setstream", function(req, res){
    res.render("setstream.ejs");
});

app.get("/portfolio/tailorzx", function(req,res){
    res.render("tailorzx.ejs");
})

app.get("/portfolio/uneverso", function(req, res){
    res.render("uneverso.ejs");
});

app.get("/portfolio/watchify", function(req, res){
    res.render("watchify.ejs");
}); 

app.post('/contact', function(req, res){
    var contact = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }
    Contact.create(contact, function(err){
        if(err){
            res.send("Something went wrong!")
            console.log(err)
        } else {
            res.redirect("/");
        }
    })
})

app.listen(3000,function(){
    console.log("YoTechWala server started on port")
})