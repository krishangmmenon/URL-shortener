const express = require("express");
const {
  handleGenerateNewUrl,
  handleGetUrlById,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewUrl);

router.get("/:shortid", handleGetUrlById);

module.exports = router;
