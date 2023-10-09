const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    fs.readFile("ved53.html", (err, data) => {
        if (err) {
            res.end("Error While Reading File")
        }else{
            res.end (data);

        }
    })
});

server.listen(2021,() => {
    console.log("Server is  listening on port 2021");
});