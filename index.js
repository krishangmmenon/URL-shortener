const express = require("express");
const { connectToMongoDb } = require("./connection");
const urlRoute = require("./routes/url");

const app = express();
const PORT = 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", urlRoute);
connectToMongoDb("mongodb://localhost:27017/url-shortener").then(() =>
  console.log(`Connected to MongoDB`)
);

app.listen(PORT, () => console.log(`server started running at port: ${PORT}`));
