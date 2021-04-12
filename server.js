// require our modules
const express = require("express");
const morgan = require("morgan");
// TODO: require CORS module
const cors = require('cors');

// initial the express app
const app = express();

// configure settings app.set

// TODO: require and configure our dotenv module
require('dotenv').config();
// TODO: require our database config file
require('./config/database');

// mount middleware with app.use
app.use(morgan("dev"));
app.use(express.json()); // converts incoming json into req.body
app.use(cors());

// mount our routes with app.use
app.use("/api/posts", require("./routes/api/posts"));

// tell the app to listen on port 3001
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express is listing for AJAX request on ${port}`);
});