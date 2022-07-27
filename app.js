const express = require("express");
const app = express();

const proposalRouter = require("./routers/proposalRouter");

app.use(express.json());

app.use("/api/v1/proposal", proposalRouter);

module.exports = app;
