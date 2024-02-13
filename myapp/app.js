const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const Sequelize = require("sequelize");
const PlayerProfile = require("./models/nodetest1");
const sequelize = require("./database");

const app = express();

app.use(bodyParser.json({ extendedurl: false }));
app.use(cors());

app.post("/add-player", (req, res, next) => {
  const {
    name,
    dob,
    photourl,
    birthplace,
    career,
    matches,
    score,
    fifties,
    centuries,
  } = req.body;

  console.log(name);
  console.log(dob);
  console.log(photourl);

  PlayerProfile.findAll({ where: { name: name } })
    .then((player) => {
      console.log("player***", player);
      console.log(player.length);
      if (player.length == 0) {
        PlayerProfile.create({
          name,
          dob,
          photourl,
          birthplace,
          career,
          matches,
          score,
          fifties,
          centuries,
        })
          .then((result) => {
            res.status(200).json({ player: result });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      res.status(200).json(player);
    })
    .catch((e) => {
      console.log(e);
    });
});

app.get("/player/:name", (req, res, next) => {
  const name = req.params.name;
  console.log("name", name);
  PlayerProfile.findAll({ where: { name: name } })
    .then((player) => {
      console.log(player);
      console.log(player.length);
      res.status(200).json(player);
    })
    .catch((e) => {
      console.log(e);
    });
});

sequelize
  .sync()
  .then((result) => {
    console.log(result);
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
