const express = require("express");
const router = express.Router();
const { wardrobePage } = require("../controllers/WardrobePage");

router.post("/addWardrobeItem", async (req, res) => {
  try {
    const itemId = await wardrobePage(req.body);
    res.status(201).json({ itemId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
