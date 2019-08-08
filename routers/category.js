const express = require("express");
const router = express.Router();
const { Category } = require("../models/schemas");

router.get("/categories", (req, res, next) => {
  let catname = req.query.name;
  if (catname) {
    console.log('query.name', catname);
    Category.find({ name: catname })
      .collation({ locale: 'en', strength: 2 }) // case insensitive
      .then(category => {
        res.send(category);
      })
      .catch(next);
  }
  else {
    Category.find({})
      .then(category => {
        res.send(category);
      })
      .catch(next);
  }
});

router.get("/categories/:id", (req, res, next) => {
  console.log("GET findById {}", req.params.id);
  Category.findById(req.params.id)
    .then(category => {
      res.send(category);
    })
    .catch(next);
});

router.post("/categories", (req, res, next) => {
  console.log(`POST ...`);
  Category.create(req.body)
    .then(category => {
      // promise
      res.send(category);
    })
    .catch(next);
});

router.put("/categories/:id", (req, res, next) => {
  console.log(`PUT, id: ${req.params.id}`);
  Category.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      Category.findOne({ _id: req.params.id }).then(category => {
        res.send(category);
      });
    })
    .catch(next);
});

router.delete("/categories/:id", (req, res, next) => {
  console.log(`DELETE, id: ${req.params.id}`);
  Category.findByIdAndRemove({ _id: req.params.id })
    .then(category => {
      res.send(category);
    })
    .catch(next);
});

module.exports = router;
