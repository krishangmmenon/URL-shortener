const shortid = require("shortid");

const URL = require("../models/url");

async function handleGenerateNewUrl(req, res) {
  const body = req.body;
  if (!body.url || !body)
    return res.status(400).json({ error: "valid url required" });
  const shortId = shortid.generate();
  await URL.create({
    shortid: shortId,
    redirectUrl: body.url,
    clicks: [],
  });
  return res.json({ id: shortId });
}

async function handleGetUrlById(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        clicks: new Date(),
      },
    }
  );
  return res.redirect(entry.redirectUrl);
}
module.exports = {
  handleGenerateNewUrl,
  handleGetUrlById,
};
