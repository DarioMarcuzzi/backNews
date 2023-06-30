const { User, Tweet } = require("../../db.js");

async function existenciaDeDatos(tweet) {
  const existingTweet = await Tweet.findOne({
    where: {
      idTweets: tweet.idTweets,
    },
  });

  return existingTweet;
}

module.exports = {
  existenciaDeDatos,
};
