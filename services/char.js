const cheerio = require("cheerio");
const axios = require("axios");

class CharService {
  async search(name) {
    const res = await axios.get(
      `https://lostark.game.onstove.com/Profile/Character/${encodeURI(name)}`
    );
    const level = getLevel(res.data);
    const job = getJob(res.data);
    const result = {
      level,
      job,
    };
    return result;
  }
}

function getLevel(data) {
  let level;
  const $ = cheerio.load(data);
  level = $(
    "#lostark-wrapper > div > main > div > div.profile-ingame > div.profile-info > div.level-info2 > div.level-info2__item > span:nth-child(2)"
  ).text();
  level = level.substring(3);
  level = level.substring(0, level.length - 3);
  return level;
}

function getJob(data) {
  const $ = cheerio.load(data);
  const job = $(
    "#lostark-wrapper > div > main > div > div.profile-character-info > img"
  ).attr("alt");
  return job;
}
module.exports = new CharService();
