const http= require('http');
const port=8000;
function requesthandler(req,res){
    console.log(req.url);
    res.end("GOTCHA!!!!");
}
var server=http.createServer(requesthandler);
server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is up and running on ",port);
});
