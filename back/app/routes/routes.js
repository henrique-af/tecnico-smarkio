module.exports = app => {
  const comments = require("../controller/controller.js");

  var router = require("express").Router();

  router.post("/", comments.create);

  router.get("/", comments.findAll);

  router.post("/watson", comments.downloadAudio);

  app.use('/api/comments', router);

};