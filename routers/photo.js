const express = require("express");
const router = express.Router();
const { Photo } = require("../models/schemas");

router.get("/photos", (req, res, next) => {
  const name = req.query.name;
  if (name) {
    Photo.find({ name: name })
      .collation({ locale: 'en', strength: 2 }) // case insensitive
      .then(photo => {
        res.send(photo);
      })
      .catch(next);
  }
  else {
    Photo.find({})
      .then(photo => {
        res.send(photo);
      })
      .catch(next);
  }
});

router.get("/photos/:id", (req, res, next) => {
  console.log("GET findById {}", req.params.id);
  Photo.findById(req.params.id)
    .then(photo => {
      res.send(photo);
    })
    .catch(next);
});

router.post("/photos", (req, res, next) => {
  console.log(`POST ...`);
  Photo.create(req.body)
    .then(photo => {
      // promise
      res.send(photo);
    })
    .catch(next);
});

router.put("/photos/:id", (req, res, next) => {
  console.log(`PUT, id: ${req.params.id}`);
  Photo.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Photo.findOne({ _id: req.params.id }).then(photo => {
        res.send(photo);
      });
    })
    .catch(next);
});

router.delete("/photos/:id", (req, res, next) => {
  console.log(`DELETE, id: ${req.params.id}`);
  Photo.findByIdAndRemove({ _id: req.params.id })
    .then(photo => {
      res.send(photo);
    })
    .catch(next);
});

module.exports = router;
