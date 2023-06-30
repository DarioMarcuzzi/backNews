const axios = require("axios");
require("dotenv").config();
const { generateConfigMakeNews } = require("../confing/config");
const { Tweet, User, New } = require("../db.js");
const makeInfo = require("../../noticiaMoke.json");
const { OPENAI_API_KEY } = process.env;

const categorias = ["tecnología", "sociedad", "política", "salud", "economía"];

const generateShortNewsFromText = async (req, res) => {
  const bank = [];
  try {
    // Consultar la base de datos para obtener todos los registros de la tabla "Tweet" y los nombres de usuario relacionados
    const tweets = await Tweet.findAll({
      include: [{ model: User }],
    });

    // Iterar sobre los tweets obtenidos
    for (let i = 0; i < tweets.length; i++) {
      const tweet = tweets[i];
      const userName = tweet.User.user_name;

      // Verificar si la noticia ya existe en la base de datos
      const existingNew = await New.findOne({
        where: { idTweets: tweet.idTweets },
      });
      if (existingNew) {
        console.log(
          `La noticia del tweet ${tweet.idTweets} ya existe en la base de datos.`
        );
        continue; // Pasar al siguiente tweet si la noticia ya existe
      }

      // Generar la configuración para la solicitud a la API de OpenAI
      const config = generateConfigMakeNews({
        fecha: tweet.fecha,
        text: tweet.text,
        idTweets: tweet.idTweets,
        urlImage: tweet.urlImage,
        userName: userName,
      });

      // Realizar la solicitud a la API de OpenAI
      setTimeout(async function () {
        const response = await axios.post(
          "https://api.openai.com/v1/chat/completions",
          config,
          {
            headers: {
              Authorization: `Bearer ${OPENAI_API_KEY}`,
            },
          }
        );

        // Obtener los datos de respuesta y guardar la nueva noticia en la base de datos
        const data = response.data.choices;
        bank.push(response.data.choices);
        // const categoria = data[0].message.content.split(":")[0];
        const textoCompleto = data[0].message.content.toLowerCase();
        const regex = new RegExp(`\\b(${categorias.join("|")})\\b`, "gi");
        const coincidencias = textoCompleto.match(regex);
        const categoria = coincidencias ? coincidencias[0] : "otro";
        const dosPuntos = data[0].message.content.indexOf(":");
        const textoRestante = data[0].message.content.substring(dosPuntos + 1);
        const titulo = textoRestante.split("\n")[0];
        const noticia = textoRestante.split("\n")[1];

        await New.create({
          text: noticia,
          idTweets: tweet.idTweets,
          categori: categoria,
          urlImage: tweet.urlImage,
          userName: userName,
          title: titulo,
        });

        console.log(`Noticia generada para el tweet ${tweet.idTweets}.`);
      }, 20000 * i);
    }
    res.send(bank);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Ocurrió un error al generar la noticia" });
  }
};

module.exports = {
  generateShortNewsFromText,
};
