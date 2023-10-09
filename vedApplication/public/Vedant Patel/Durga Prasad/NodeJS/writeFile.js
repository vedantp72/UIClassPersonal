const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    let userData = {
        Name : "Bhagyesh",
        Age : 28,
        Gender : "Male",
        Location : "Pune"
    }
    //     fs.writeFile("abc.txt", JSON.stringify(userData),(err, data) => {
    //         if (err) {
    //                     res.end("Error While writing content to File")
    //                 }else{
    //                     res.end ("Data Has been Added");
    //                 }
    //     });
    // });
    fs.appendFile("abc.txt", JSON.stringify(userData),(err, data) => {
        if (err) {
                    res.end("Error While writing content to File")
                }else{
                    res.end ("Data Has been Added");
                }
    });
});

server.listen(2022,() => {
    console.log("Server is  listening on port 2022");
});