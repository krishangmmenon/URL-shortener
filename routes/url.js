const express = require("express");
const router = express.Router();
const {
  handleCreateNewUrl,
  handleGetAnalytics,
  handleGetUrl,
} = require("../controllers/url");

router.post("/", handleCreateNewUrl);
router.get("/:shortId", handleGetUrl);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
