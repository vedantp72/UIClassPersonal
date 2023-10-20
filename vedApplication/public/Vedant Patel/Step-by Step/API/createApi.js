const express = require("express");
const app = express();
const data = require("./dataApi")

app.get('/', (req, res) => {
    res.writeHead(201, { "content-type": "application\json" });
    res.write(JSON.stringify(data));
    res.end();

  }).listen(8092);