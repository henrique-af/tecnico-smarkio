module.exports = app => {
    const comments = require("../controller/controller.js");
  
    var router = require("express").Router();
  
    router.post("/", comments.create);

    router.get("/", comments.findAll);
  
    app.use('/api/comments', router);
  };