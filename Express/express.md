Express is a powerful and flexible JS framework built on top of Node JS that is used for building web servers and APIs.
Popular, unopinionated web framework written in JS and hosted within the Node JS runtime environment.

It is a Node module that provides a set of features and tools for building web applications and APIs.
First you must import it in your program file like app.js or index.js using require('express') so as to use it.

Then we invoke the imported express module as a function to create a server.
This returns an instance of an Express application
This application can be used to start a server and specify server behavior

What is the purpose of a server:
A server is a program that listens for incoming requests from clients (like web browsers), performs whatever action is required to satisfy those requests (like fetching data from a database, processing it, etc.)
and sends back responses. It can serve web pages, handle API requests, manage databases, and more.

In order for our server to start responding to requests, we need to tell it where to start listening for these new requests.
We provide a port number argument to the listen method of our express application instance. This port number is like a door through which clients can access our server.
The server will then listen on this specified port and respond to any incoming requests that are sent to that port.

Second argument is a callback func that is called once the server starts successfully and is ready to handle requests. This is a good place to log a message indicating that the server is running and on which port it is listening.

Once the server is listening, it can respond to requests.
How does the server know what to do with a request?
To tell our server how to deal with any given request, we register a series of routes
Routes define the control flow of a request based on the URL path(request's path) and HTTP method/verb (GET, POST, etc.) of the incoming request.
The path is a part of the request URL;
Located after the hostname and portnumber

Use app.get to register routes that match GET requests to a specific path.
Express routes including app.get take two arguments:

1. The path to match (a string)
2. A callback function that is called when a request matches the specified path and HTTP method.
   This callback function takes two parameters: req (the request object) and res (the response object).  
   The request object contains information about the incoming request, such as the URL, headers, query parameters, and body data.
   The response object is used to send a response back to the client. It has methods like res.send() to send a response body, res.json() to send a JSON response, and res.status() to set the HTTP status code of the response.
   We have an optional next function parameter that can be used to pass control to the next middleware function in the stack if there are multiple middleware functions registered for the same route. Can be omitted if not needed.

If no routes are matched on a client request, the server will respond with a default 404 Not Found error.
