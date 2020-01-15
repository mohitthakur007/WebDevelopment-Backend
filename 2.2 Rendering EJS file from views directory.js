//Install EJS, Express, path comes preinstalled
//make views directory and put home.ejs file inside

const express=require('express');
const path=require('path');
const port =8000;
var app=express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'))
app.get('/',function(req,res){
    res.render('home',{'title' :"My first express page"});
});

app.listen(port,function(err){
    if(err){
        console.log("ERROR",err);
    }
    console.log("Server is running at port ",port);
});
