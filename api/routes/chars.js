const express = require("express");
const router = express.Router();
const cheerio = require("cheerio");
const axios = require("axios");

router.get("/:name", async (req, res, next) => {
  try {
    let userLevel;
    let userJob;
    await axios
      .get(
        `https://lostark.game.onstove.com/Profile/Character/${encodeURI(
          req.params.name
        )}`
      )
      .then((r) => {
        const $ = cheerio.load(r.data);
        userLevel = $(
          "#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info2 > div.level-info2__item > span:nth-child(2)"
        ).text();
        userJob = $(
          "#lostark-wrapper > div > main > div > div.profile-character-info > img"
        ).attr("alt");
        userLevel = userLevel.substring(3);
        userLevel = userLevel.substring(0, userLevel.length - 3);
      })
      .catch((Error) => {
        console.log(Error);
      });
    res.json({ level: userLevel, job: userJob });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
