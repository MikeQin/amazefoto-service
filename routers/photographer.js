const express = require("express");
const router = express.Router();
const { Photographer } = require("../models/schemas");

router.get("/photographers", (req, res, next) => {
  Photographer.find({})
    .then(photographer => {
      res.send(photographer);
    })
    .catch(next);
});

router.get("/photographers/:id", (req, res, next) => {
  console.log("GET findById {}", req.params.id);
  Photographer.findById(req.params.id)
    .then(photographer => {
      res.send(photographer);
    })
    .catch(next);
});

router.post("/photographers", (req, res, next) => {
  console.log(`POST ...`);
  Photographer.create(req.body)
    .then(photographer => {
      // promise
      res.send(photographer);
    })
    .catch(next);
});

router.put("/photographers/:id", (req, res, next) => {
  console.log(`PUT, id: ${req.params.id}`);
  Photographer.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Photo.findOne({ _id: req.params.id }).then(photographer => {
        res.send(photographer);
      });
    })
    .catch(next);
});

router.delete("/photographers/:id", (req, res, next) => {
  console.log(`DELETE, id: ${req.params.id}`);
  Photographer.findByIdAndRemove({ _id: req.params.id })
    .then(photographer => {
      res.send(photographer);
    })
    .catch(next);
});

module.exports = router;
