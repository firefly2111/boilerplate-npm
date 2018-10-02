
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */
console.log("Hello World");

app.get("/", function(req, res){
  res.send("Hello Express");
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});

pp.use(express.static(__dirname + "/public"));

/** 5) serve JSON on a specific route */
app.get("/json", function(req, res){
  if(process.env.MESSAGE_STYLE === "uppercase"){
  res.json({"message": "HELLO JSON"});
     }else{
  res.json({"message": "Hello json"});
 }
});
