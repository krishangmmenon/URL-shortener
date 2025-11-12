const shortid = require("shortid");
const URL = require("../model/url");

async function handleCreateNewUrl(req, res) {
  const body = req.body;
  if (!body || !body.url)
    return res
      .status(400)
      .json({ error: "url is required and should be valid" });
  const shortId = shortid.generate();
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    clicks: [],
  });
  return res.render("home", { id: shortId });
}

async function handleGetUrl(req, res) {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { clicks: { timestamp: Date.now() } } },
      { new: true }
    );
    if (!entry) {
      return res.status(400).send("Short url not found");
    }
    return res.redirect(entry.redirectUrl);
  } catch (error) {
    console.error("error in handleGetUrl:", error);
    return res.statuts(500).send("Internal server error");
  }
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalclicks: result.clicks.length,
    analytics: result.clicks,
  });
}

module.exports = {
  handleCreateNewUrl,
  handleGetAnalytics,
  handleGetUrl,
};
