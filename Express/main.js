// In main, we will have a call to the listen method of the Express app, which will start the server and allow it to listen for incoming requests on a specified port.

// Import the Express app from the app.js file using require. This allows us to use the app instance that we created in app.js.
// We use destructuring assignment to extract the app property from the object that is exported from app.js. This allows us to directly access the app instance without needing to reference it as a property of an object.
const { app } = require("./app.js");

// Specify port number for the server to listen on. This is the port that clients will use to connect to the server. In this case, we are using port 3000, which is a common choice for development servers. You can choose any available port number that you prefer.
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server has started and is listening on port:${PORT}`);
});
