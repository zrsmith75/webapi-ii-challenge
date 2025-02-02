const express = require("express");
const postRoutes = require("./posts/postRoutes.js");
// const db = require("./data/db.js");
const server = express();
const port = 4000;

server.use(express.json());
// /api/ route
server.use("/api/posts", postRoutes);

server.get("/", (req, res) => {
  res.status(200).send("Hello from express! Lambda Web API Challenge II");
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
