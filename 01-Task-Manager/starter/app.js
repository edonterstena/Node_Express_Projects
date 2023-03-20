const express = require("express");
const app = express();
const tasks = require("../starter/routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();
const notFound = require("../starter/middleware/not-found");
const errorHandlerMiddleware = require("../starter/middleware/error-handler");

//middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
