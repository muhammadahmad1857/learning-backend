const http = require("http");
const port = 5477;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`This is ${req.url} route`);
  }
  if (req.url === "/about") {
    res.end(`This is ${req.url} route`);
  }
  if (req.url === "/contact") {
    res.end(`This is ${req.url} route`);
  }
});

server.listen(port, () => {
  console.log(`The port ${port} is listening`);
});
