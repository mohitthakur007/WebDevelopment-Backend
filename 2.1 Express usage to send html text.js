//Install EXPRESS
const express=require('express');
const port =8000;
var app=express();
app.get('/',function(req,res){
    res.send("hiiiiii!!!!!")
});

app.listen(port,function(err){
    if(err){
        console.log("ERROR",err);
    }
    console.log("Server is running at port ",port);
});
