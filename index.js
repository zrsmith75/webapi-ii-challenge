const express = require("express");

const server = express();
const port = 4000;

server.get("/", (req, res) => {
  res.status(200).send("Hello from exprss");
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
