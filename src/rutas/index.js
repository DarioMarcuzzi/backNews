const { Router } = require("express");
const { getUserTimeLineTwitter } = require("../controladores/timeLineUser");
const { generateShortNewsFromText } = require("../controladores/makeNews");
const getNews = require("../controladores/getNews");

const router = Router();

router.get("/", getUserTimeLineTwitter);
router.get("/news", getNews);
router.get("/news/:category", getNews);
router.post("/generatenews", generateShortNewsFromText);

module.exports = router;
