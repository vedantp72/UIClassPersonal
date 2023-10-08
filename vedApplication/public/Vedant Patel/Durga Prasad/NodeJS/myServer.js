const http = require("http");
const myserver = http.createServer ((req, res)=>{
    response.end("hello first server got created")
});
myserver.listen(8084, ()=> {
    console.log("Server is listening at 8080");
});