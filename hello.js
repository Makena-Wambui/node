// How to use Node JS to create a simple web server that listens to HTTP requests at the URL http://localhost:8000, the script responds with 'Hello, World!'.

// First we load/import the built-in http module in Node JS, which provides functionalities for creating an HTTP server.
const http = require("http");

// Then we define the hostname and port number where the server will listen for incoming requests.
const hostname = "127.0.0.1";
const port = 8000;

// Next, we create an HTTP server using the http.createServer() method. This method takes a callback function as an argument, which is executed every time the server receives a request. The callback function has two parameters: req (the request object) and res (the response object).
const server = http.createServer((req, res) => {
  // Inside the callback function, we set the response HTTP header with HTTP status and content type. Here we set the status code to 200 (OK) and the content type to 'text/plain'.
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send the response body - 'Hello, World!' - to the client using the res.end() method, which also signals that the response is complete.
  res.end("Hello, World! \n");
});

// Finally, we start the server by calling the server.listen() method with the hostname and port number.
server.listen(port, hostname, () => {
  // callback function to log a message to the console when the server starts successfully and is ready to accept requests.
  console.log(`Server running at http://${hostname}:${port}/`);
});
