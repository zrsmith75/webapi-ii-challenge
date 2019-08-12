const express = require("express");
const db = require("../data/db.js");

const router = express.Router();

// GET /posts
// router.get("/", (req, res) => {
//   res.status(200).send("GET");
// });

router.get("/", async (req, res) => {
  try {
    const posts = await db.find(req.query);
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "The posts information could not be retrieved."
    });
  }
});

// GET /posts/:id

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await db.findById(id);

    if (post.length > 0) {
      res.status(200).json(post);
    } else {
      res.status(404).json({
        message: "The post with the specified ID does not exist."
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "The post information could not be retrieved."
    });
  }
});

// GET /posts/:id/comments
// router.get()

// POST /posts
router.post("/", async (req, res) => {
  try {
    const post = await db.insert(req.body);
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "There was an error while saving the post to the database"
    });
  }
});

// POST /posts/:id/comments

// DELETE /posts/:id

// PUT /posts/:id

module.exports = router;
