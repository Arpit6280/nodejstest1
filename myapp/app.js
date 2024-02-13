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
      } else {
        player[0].name = name;
        player[0].dob = dob;
        player[0].photourl = photourl;
        player[0].birthplace = birthplace;
        player[0].career = career;
        player[0].matches = matches;
        player[0].score = score;
        player[0].fifties = fifties;
        player[0].centuries = centuries;

        return player[0].save();
      }
      //   res.status(200).json(player);
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
      console.log("player***", player);
      console.log("player***", player[0].name);
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
