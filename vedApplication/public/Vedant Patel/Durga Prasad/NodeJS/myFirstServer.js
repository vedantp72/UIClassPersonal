var http = require("http");

var myServer = http.createServer((request, response) => {
    // response.end("Hello first server got created");
    // var userData = {
    //     name: 'Raj',
    //     age: 20,
    //     gender: 'Male'
    // }
    // response.end(JSON.stringify(userData)); 
    response.writeHead(204, {
        'Content-Type': 'text/html'   // string, json, xml, html etc.
    });
    response.end("<b>hello</b>");

});


myServer.listen(8085, () => {
    console.log("Server is listing at 8085");
});