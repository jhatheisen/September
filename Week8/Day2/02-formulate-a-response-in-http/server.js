// Your code here
// import http
const http = require('http');
// call create server on http and pass in function
// fuction takes 2 params request and response obj
const server = http.createServer((req, res) => {
  // console.log(req);
  // console.log(res);

  // parse req
  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  req.on("end", () => {
    if (reqBody) {
      console.log(reqBody);
    }
  });

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/css');
  const responseBody = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello there!</h1>
  </body>
  </html>
`;
  res.end(responseBody);

});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
