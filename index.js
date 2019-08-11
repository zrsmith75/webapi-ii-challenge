const express = require("express");

// other files
const db = require("./data/db.js");

// // global objects
const server = express();
const port = 4000;

// // middleware
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send(`
    <h2>Lambda Web API II Challenge!</h2>
  `);
});

// request handlers

// GET

// POST

// DELETE

// PUT

// Listen
server.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
