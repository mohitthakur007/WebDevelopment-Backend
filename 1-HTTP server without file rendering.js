const http= require('http');
const port=8000;
var server=http.createServer();
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on ",port);
});