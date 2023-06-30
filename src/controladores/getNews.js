const { New } = require("../db.js");

const getNews = async (req, res) => {
  const { category } = req.params;

  try {
    let news;

    if (category) {
      news = await New.findAll({
        where: { categori: category },
      });
    } else {
      news = await New.findAll();
    }

    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las noticias" });
  }
};

module.exports = getNews;
