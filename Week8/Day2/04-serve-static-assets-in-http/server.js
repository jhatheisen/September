const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {

  let path = req.url;
  // check if static in url
  if (path.slice(0, 7) === '/static') {
    // try finding file
    try {
      // add assets to front
      path = './assets' + path.slice(7);

      // get file extention
      let extention = path.slice(path.length - 4);

      // if file extention jpg or css change to content type value
      switch(extention) {
        case '.jpg':
          extention = 'image/jpeg';
          break;
        case '.css':
          extention = 'text/css';
          break;
        default :
          extention = 'text/plain';
          break;
      }

      // read file path
      const location = fs.readFileSync(path);
      // set code and content type to extention
      res.statusCode = 200;
      res.setHeader('Content-Type', extention);
      // send file
      return res.end(location);

      // if file not found log can't find
    } catch (e) {
      console.log('404 Location not found for requested file');
    }
  }

  const example = fs.readFileSync('./index.html');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(example);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
