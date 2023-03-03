const connect = require("./helper/db");
const userRouter = require("./route/userRoute");
const commentRouter = require("./route/commentRouter");

connect();

const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8000;

const express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));


app.use("/users", userRouter);
app.use("/comments", commentRouter);
app.listen(port, () => {
  console.log(`server is running at localhost:${port} =====> 3000`);
});
