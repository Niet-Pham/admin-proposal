const express = require("express");
const app = express();

const proposalRouter = require("./routers/proposalRouter");

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api/v1/proposal", proposalRouter);

module.exports = app;
