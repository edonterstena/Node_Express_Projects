require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("../starter/db/connect");
const productsRouter = require("../starter/routes/products");

const errorHandlerMiddleware = require("../starter/middleware/error-handler");
const notFoundMiddleware = require("../starter/middleware/not-found");

//middleware

app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">products route</a>');
});

app.use("/api/v1/products", productsRouter);

//products route

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server listening on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
