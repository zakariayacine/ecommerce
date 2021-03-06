const express = require("express");
const api = express.Router();
// MY MODULES
const users_module = require("../model/users");
const products_module = require("../model/products");
const orders_module = require("../model/orders");
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
api.get("/user/:id", function (req, res) {
  users_module.get_user(req.params.id, function (err, result) {
    let dataSent = {
      data: {
        user: result,
      },
      err: err,
    };
    res.status(200).send(dataSent);
  });
});
api.post("/user/add", function (req, res) {
  let inputs = req.body;
  console.log(inputs);
  let { name, email, role, password, created_at, updated_at } = inputs;
  users_module.user_add(
    name,
    email,
    role,
    password,
    created_at,
    updated_at,
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
api.get("/products", function (req, res) {
  products_module.get_products(function (err, result) {
    let dataSent = {
      data: {
        products: result,
      },
      err: err,
    };
    res.status(200).send(dataSent);
  });
});
api.get("/inovices", function (req, res) {
  orders_module.get_all_inovice(function (err, result) {
    let dataSent = {
      data: {
        inovice: result,
      },
      err: err,
    };
    res.status(200).send(dataSent);
  });
});
api.get("/product/:id", function (req, res) {
  products_module.get_product(req.params.id, function (err, result) {
    let dataSent = {
      data: {
        product: result,
      },
      err: err,
    };
    res.status(200).send(dataSent);
  });
});
api.post("/product/add", function (req, res) {
  let inputs = req.body;
  console.log(inputs);
  let { name, description, photos, price, stock, created_at, updated_at } =
    inputs;
  products_module.product_add(
    name,
    description,
    photos,
    price,
    stock,
    created_at,
    updated_at,
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
api.post("/order/add", function (req, res) {
  let inputs = req.body;
  console.log(inputs);
  let { qtt,product_id,user_id,inovice_id} =
    inputs;
    orders_module.order_add(
    qtt,
    product_id,
    user_id,
    inovice_id,
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
api.get("/orders/:id", function (req, res) {
  orders_module.get_orders(req.params.id, function (err, result) {
    let dataSent = {
      data: {
        orders: result,
      },
      err: err,
    };
    res.status(200).send(dataSent);
  });
});
api.get("/order/qtt/:id/:oper", function (req, res) {
    orders_module.order_qtt_change(req.params.id,req.params.oper, function (err, data) {
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
