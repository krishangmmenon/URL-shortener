const express = require("express");
const urlRouter = require("./routes/url");
const { connectToMongoDb } = require("./connections");
const URL = require("./model/url");
const path = require("path");
const staticRoute = require("./routes/staticRouter");
const port = 4000;
const app = express();

connectToMongoDb("mongodb://localhost:27017/url-shortener").then(() =>
  console.log("connected to mongodb")
);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", urlRouter);
app.use("/", staticRoute);
app.listen(port, () => console.log(`server started running at port : ${port}`));
