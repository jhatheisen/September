const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/
const http = require('http');

server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = '';
  req.on('data', data => {
    reqBody += data;
  });
  req.on('end', () => {
    console.log(reqBody);
    if (reqBody) {
      reqBody = reqBody.split('&')
        .map(keyValuePair => keyValuePair.split('='))
        .map(([key, value]) => [key, value.replace(/\+/, ' ')])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc
        }, {});
      req.body = reqBody;
    }
    sendFormPage(req, res);


  });

});

const port = 5000;

server.listen(port, () => console.log('Successfully started the server on port ', port));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
