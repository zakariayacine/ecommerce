const express = require("express");
const api = express.Router();

// MY MODULES
const users_module = require("../model/users");
const products_module = require("../model/products");
// MY MODULES
api.get("/users", function (req, res) {
  users_module.get_users(function (err, result) {
      let dataSent = {
        data: {
          users: result,
        },
        err: err,
      };

      res.status(200).send(dataSent);
    });
  });
api.post("/user/add", function (req, res) {
  let inputs = req.body;
  console.log(inputs);
  let { nom, prenom} = inputs;
  users_module.users_add(
    nom,
    prenom,
    function (err, data) {
      if (err) console.log(err);
      let obj = {
        err: err,
        data: data,
      };
      res.status(200).send(obj);
    }
  );
});

module.exports = api;
