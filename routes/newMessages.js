const express = require("express");
const router = express.Router();
const { messages } = require("./index");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("form");
});

router.post("/", function (req, res, next) {
  const authorsName = req.body.authorsName;
  const message = req.body.message;

  // This would send a database query but instead we just use local array
  messages.push({ user: authorsName, text: message, added: new Date() });

  res.redirect("/");
});

module.exports = router;
