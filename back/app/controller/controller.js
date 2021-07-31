const { request, response } = require("express");
const db = require("../models");
const Comments = db.comments;
const messageError = "Um erro ocorreu";
const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

exports.create = (req, res) => {
  if (!req.body.comments) {
    res.status(400).send({
      message: "Digita alguma coisa!"
    });
    return;
  }

  const payload = {
    comments: req.body.comments
  }

  Comments.create(payload)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || messageError
      });
    });
};

exports.findAll = (req, res) => {

  Comments.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || messageError
      });
    });
};

exports.downloadAudio = (req, res) => {
  const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: process.env.KEY,
    }),
    serviceUrl: process.env.URL,
  });

  const synthesizeParams = {
    text: req.body.text,
    accept: 'audio/wav',
    voice: 'pt-BR_IsabelaV3Voice',
  };

  textToSpeech.synthesize(synthesizeParams)
    .then(response => {
      return textToSpeech.repairWavHeaderStream(response.result);
    })
    .then(buffer => {
      res.send({ buffer });
    })
    .catch(err => {
      console.log('error:', err);
    });
}
