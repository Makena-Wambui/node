// Import the Express Library
const express = require("express");

// Invoke the imported Express module as a function to create a server
// Returns an instance of an Express application
const app = express();

// This application can be used to start a server and specify server behavior
// Create a route handler for GET /expressions requests. This means that when a client makes a GET request to the /expressions endpoint, the server will respond with the specified message.
app.get("/expressions", (req, res) => {
  console.log(req);
});
// Then we export the app so it can be used in another file like server.js
module.exports = { app };
