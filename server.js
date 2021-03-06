const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
//if (process.env.NODE_ENV === "production") {
  //app.use(express.static("client/build"));
//}

// Add routes, both API and view
app.use(routes);

// Connect to the NY Time Article Mongo DB
mongoose.connect(
 // process.env.MONGODB_URI || 
  "mongodb://localhost/nytarticles").then(() => {
console.log("Connected to Database!!!!!");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

/*// Connect to the Book Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/reactreadinglist"
);
*/

// Start the API server
app.listen(PORT, () => 
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);