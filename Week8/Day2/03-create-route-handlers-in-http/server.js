const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
      console.log(req.body);
    }
    // Do not edit above this line

    // define route handlers here
    // home page
    if (req.method === 'GET' && req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dog Club');
    }

    // dog index
    if (req.method === 'GET' && req.url === '/dogs') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dog index');
    }


    // dog create form page
    if (req.method === 'GET' && req.url === '/dogs/new') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end('Dog Create form page');
    }

    // posting gen new dog id and redirect
    if (req.method === 'POST' && req.url === '/dogs') {
      let newDogId = getNewDogId();
      res.statusCode = 302;
      res.setHeader('Location', `/dogs/${newDogId}`)
      return res.end();
    }


    // show details for dog id
    let urlPath = req.url.split('/');
    // just change placeholder path
    let holderPath = '/dogs/:dogId'.split('/');
    let dogId = Number(urlPath[2]);
    let isDogIdURL = urlPath.length === holderPath.length
                  && urlPath[1] === holderPath[1]
                  && typeof dogId === 'number';
    console.log(urlPath, holderPath, isDogIdURL);
    if (req.method === 'GET' && isDogIdURL) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end(`Dog details for dogId: ${dogId}`);
    }

    // redirect to show details for dog id
    if (req.method === 'POST' && isDogIdURL) {
      res.statusCode = 302;
      res.setHeader('Location', `/dogs/${dogId}`);
      return res.end();
    }

    //holder path for dog edit page
    holderPath = '/dogs/:dogId/edit'.split('/');
    // same as dog id url, but 3 part is same
    let isDogEditUrl = urlPath.length === holderPath.length
                    && urlPath[1] === holderPath[1]
                    && typeof dogId === 'number'
                    && urlPath[3] === holderPath[3];
    // dog edit page
    if (req.method === 'GET' && isDogEditUrl) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      return res.end(`Dog edit form page for dogId: ${dogId}`);
    }

    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
