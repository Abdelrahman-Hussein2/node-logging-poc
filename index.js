const express = require('express');
const logger = require("./logger");

const { generateId } = require("./helpers");

const app = express();

app.use((req, res, next) => {
    const requestId = generateId();
    res.setHeader("X-Request-Id", requestId);
    req.requestId = requestId;
    next();
})



app.get("/", (req, res) => {
    logger.info(`request: ${req.requestId}`);
    res.send("Hello World");
})

app.listen(3000, () => {
    console.log("App started");
})