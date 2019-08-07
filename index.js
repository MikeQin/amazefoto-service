const express = require("express");
const app = express();
const photoRouter = require("./routers/photo");
const categoryRouter = require("./routers/category");
const photographerRouter = require("./routers/photographer");
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/photos",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    user: "mongo",
    pass: "mongo",
    authSource: "admin"
  },
  (error, db) => {
    if (error) console.log(error);
  }
);
mongoose.Promise = global.Promise;

// Use Middleware
//app.use(express.static("public"));
app.use(express.json()); // equals to body-parser
app.use("/api", photoRouter, categoryRouter, photographerRouter);
// Error Handler Middleware
app.use((err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status(422).send({ code: err.code, error: err.errmsg });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World.");
});

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));
