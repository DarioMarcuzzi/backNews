require("dotenv").config();

const generateConfigTimeLineUser = (username) => {
  return {
    method: "GET",
    url: process.env.URL,
    params: {
      username: username,
    },
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY,
      "X-RapidAPI-Host": process.env.RAPID_HOST,
    },
  };
};

const generateConfigMakeNews = (objet) => {
  const { fecha, text } = objet;
  return {
    model: "gpt-3.5-turbo",
    temperature: 0.7,
    n: 1,
    messages: [
      {
        role: "user",
        content: `según este texto:${text} a cuales de estas categoria pertenece? (tecnologia-sociedad-politica-salud-economia).
        Luego redacta una noticia de ese texto publicado en ${fecha}, no debe contener mas de 70 palabras y en la primera linea debe tener un titulo`,
      },
    ],
  };
};

module.exports = {
  // configTimeLineUser,
  generateConfigTimeLineUser,
  generateConfigMakeNews,
};
