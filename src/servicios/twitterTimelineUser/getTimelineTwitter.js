const axios = require("axios");
const { generateConfigTimeLineUser } = require("../../confing/config");
const twitterText = require("twitter-text");

const USERS = [
  "AlguienVulgar",
  "elonmusk",
  // "ciencia_ar",
  // "msalnacion",
  // "CFKArgentina",
  // "SADI_arg",
];

async function getTimeLineTwitter(req, res) {
  const bank = [];

  for (let i = 0; i < USERS.length; i++) {
    setTimeout(async function () {
      try {
        const username = USERS[i];
        const config = generateConfigTimeLineUser(username);
        const response = await axios.request(config);
        const timelineData = response.data;

        // Formatear la respuesta
        const formatData = fotmatearData(timelineData, username);
      } catch (error) {
        console.log(error);
        res
          .status(500)
          .send(
            "Error al obtener las líneas de tiempo de los usuarios de Twitter."
          );
      }
    }, 5000 * i);
  }
}

function fotmatearData(data, userName) {
  const info = {
    userName: userName,
    tweets: [],
  };

  data.data.user_result.result.timeline_response.timeline.instructions[1].entries.map(
    (e) => {
      if (e.content.content) {
        const objeto = {
          fecha: "",
          text: "",
          idTweets: "",
          urlImage: "",
        };

        if (
          e.content.content.tweetResult.result.legacy.full_text.startsWith(
            "https"
          ) ||
          e.content.content.tweetResult.result.legacy.full_text.startsWith("RT")
        ) {
          //no hacer nada
        } else {
          objeto.text = e.content.content.tweetResult.result.legacy.full_text;
          objeto.fecha = e.content.content.tweetResult.result.legacy.created_at;
          objeto.idTweets =
            e.content.content.tweetResult.result.legacy.conversation_id_str;
          if (e.content.content.tweetResult.result.legacy.extended_entities) {
            objeto.urlImage =
              e.content.content.tweetResult.result.legacy.extended_entities.media[0].media_url_https;
          }
          info.tweets.push(objeto);
        }
      }
    }
  );

  return info;
}
