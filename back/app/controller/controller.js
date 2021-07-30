const db = require("../models");
const Comments = db.comments;
const Op = db.Sequelize.Op;

exports.create = (req, res) => { 
    if (!req.body.title) {
        res.status(400).send({
          message: "Digita alguma coisa!"
        });
        return;    
    }
  const comments = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  Comments.create(comments)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Erro"
      });
    });
};

exports.findAll = (req, res) => {

};