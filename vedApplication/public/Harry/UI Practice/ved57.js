console.log("Hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is Rohan Das');
  res.end
  (`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudo selectors and more designing in css</title>
      This is HTML Page
      <link rel="stylesheet" href="ved.css"> <!--external css file-->
      <script src="ved.js"></script> <!--external js file--> 
      <style>
          .container{
              border: 2px solid blue;
              background-color: pink;
              padding: 34PX;
              margin: 34px auto;
              width: 900px;
  
          }
          a{
              text-decoration:none;
              color: black;
          }
          a:hover{
              color: blue;
              background-color: brown;
          }
          a:visited{
              color:purple;
          }
          .btn{
              background-color: silver;
              padding: 4px;
              border: none;
              cursor: pointer;
              font-size: 12px;
              border-radius: 4px;
              
          }
          .btn:hover{
              color: blue;
          }
          .btn:visited{
              color:purple;
          }
      </style>
  </head>
  <body>
      <div class="container   " id="cont1">
          <h3></h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus ratione tempore aliquid, commodi vel maxime, ab harum sapiente aperiam doloribus aspernatur veritatis, ipsam consequuntur? Expedita, pariatur molestias? Sequi, quae aspernatur.</p>
          <a href="http://google.com" target="_blank" class="btn">Read more</a>
          <button class="btn">Contact us</button>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});