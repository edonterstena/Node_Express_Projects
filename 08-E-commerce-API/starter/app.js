require("dotenv").config();
require("express-async-errors");

//express
const express = require("express");
const app = express();
const authRouter = require("./router/authRoutes");
const usersRouter = require("./router/userRoutes");

// rest of the packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

//mongodb
const connectDB = require("./db/connect");

//middlewares
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(morgan("tiny"));
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

//route
app.get("/", (req, res) => {
  res.send("e-commerce api");
});

app.get("/api/v1", (req, res) => {
  console.log(req.signedCookies);
  res.send("e-commerce api");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server listening to port ${port} ...`));
  } catch (error) {
    console.log(error);
  }
};

start();
