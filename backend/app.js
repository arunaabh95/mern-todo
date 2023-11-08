// imports modules & dependencies
const express = require("express");
const env = require("dotenv");
var cors = require("cors");

// imports routes, middleware, and configs
const taskRouter = require("./src/routes/tasks");
const { notFoundRoute, errorHandler } = require("./src/errorHandler");

// loads environment variables from .env file
env.config();

// initializes express app
const app = express();

// application database connection establishment
const connectDatabase = require("./src/db");
connectDatabase();

// corss-origin-allow-all
app.use(cors());


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// sets default route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to TASK Node.js application backend." });
});

// tasks api routes
app.use(process.env.APP_API_PREFIX, taskRouter);

// 404 - not found error handler
app.use(notFoundRoute);

// error handler
app.use(errorHandler);

// app listens to defined port
app.listen(process.env.APP_PORT, () => {
  console.log("Task-App backend server running on: " + process.env.APP_BASE_URL);
});

