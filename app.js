// C:\Program Files\MongoDB\Server\4.4\bin

var express = require('express');
var bodyParser  = require("body-parser");
var mongoose = require("mongoose");

var app = express();

mongoose.connect('mongodb://localhost/yotechwala', {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.connect('mongodb+srv://cluster0.dm9em.mongodb.net/database?retryWrites=true&w=majority', {
//     auth: {
//       user: "admin",
//       password: "pass"
//     },
//     useNewUrlParser:true,
//     useUnifiedTopology: true
//       }).then(
//         () => { 
//             console.log("MongoAtlas Database connected.");
//         },
//         err => { 
//             /** handle initial connection error */ 
//             console.log("Error in database connection. ", err);
//         }
//     );

    
mongoose.set('useFindAndModify', false);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.render("home.ejs");
})

app.get('/about', function(req, res){
    res.render('about.ejs');
})

app.listen(3000, function(){
    console.log("YoTechWala server started on port")
})