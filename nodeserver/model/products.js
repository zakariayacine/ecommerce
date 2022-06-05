const database = require("./database");

let get_products = function (callback) {
  let sql = "select * from products";
  database.connection.query(sql, null, function (err, result, fields) {
    if (err) console.log("error : ", err);
    callback(err, result);
  });
};
let get_product = function (id, callback) {
  let sql = "select * from products where id=" + id;
  database.connection.query(sql, null, function (err, result, fields) {
    if (err) console.log("error : ", err);
    callback(err, result);
  });
};
let product_add = function (
  name,
  description,
  photos,
  price,
  stock,
  created_at,
  updated_at,
  callback
) {
  let data_insert = [
    name,
    description,
    photos,
    price,
    stock,
    created_at,
    updated_at,
  ]; //une seule insertion
  let sql =
    "insert into products" +
    "(name, description, photos, price, stock, created_at, updated_at) " +
    "values ?";
  database.connection.query(
    sql,
    [[data_insert]],
    function (result, err, fields) {
      if (err) console.log("error : ", err);
      console.log(result);
      callback(err, result);
    }
  );
};
let product_update = function (
  id,
  name,
  description,
  photos,
  price,
  stock,
  created_at,
  updated_at,
  callback
) {
  let data_update = {
    id: id,
    name: name,
    description: description,
    photos: photos,
    price: price,
    stock: stock,
    created_at: created_at,
    updated_at: updated_at,
  };
  let sql = "update products set ?";
  database.connection.query(sql, [data_update], function (result, err, fields) {
    if (err) console.log("error : ", err);
    callback(err, result);
  });
};
exports.get_products = get_products;
exports.get_product = get_product;
exports.product_add = product_add;
exports.product_update = product_update;
