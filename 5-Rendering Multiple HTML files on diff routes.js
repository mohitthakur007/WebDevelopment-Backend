const http= require('http');
const port=8000;
const fs= require('fs');
function requesthandler(req,res){
    console.log(req.url);
    res.writeHead(200,{"content-type": "text/html"});
    var path;
    switch(req.url){
        case '/':
            path="./index.html";
            break;
        case '/profile':
            path="./profile.html";
            break;
        default:
            path="./404.html";
    }
    fs.readFile(path,function(err,data){
        if(err)
        {
            console.log("ERROR");
            return;
        }
        res.end(data);
    });
}
var server=http.createServer(requesthandler);
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on port ",port);
});
