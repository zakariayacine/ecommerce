const database = require("./database");
const usefull = require("./usefull");
let get_orders = function (id, callback) {
  let sql = "select * from orders where inovice_id=" + id;
  database.connection.query(sql, null, function (err, result, fields) {
    if (err) console.log("error : ", err);
    callback("", result);
  });
};

let order_add = function (qtt, product_id, user_id, inovice_id, callback) {
  usefull.timeStamp(function (err, result) {
    let created = result;
    let updated = result;
    if (inovice_id === "") {
      let data_insert_ino = [
        (delivery = 0),
        (price = 0),
        (total_price = 0),
        created,
        updated,
      ];
      let sql =
        "insert into inovices" +
        "(delivery, price, total_price, created_at, updated_at) " +
        "values ?";
      database.connection.query(
        sql,
        [[data_insert_ino]],
        function (err, result, fields) {
          console.log(result);
          if (err) console.log("error : ", err);
          order_add_function(
            qtt,
            product_id,
            user_id,
            result.insertId,
            created,
            updated,
            function (err, result) {
              callback(err, result);
            }
          );
        }
      );
    } else {
      order_add_function(
        qtt,
        product_id,
        user_id,
        inovice_id,
        created,
        updated,
        function (err, result) {
          callback(err, result);
        }
      );
    }
  });
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

let order_add_function = function (
  qtt,
  product_id,
  user_id,
  inovice_id,
  created_at,
  updated_at,
  callback
) {
  let sqlChek =
    "select * from orders where product_id=" +
    product_id +
    " and inovice_id=" +
    inovice_id +
    " LIMIT 1;";
  database.connection.query(sqlChek, null, function (err, result, fields) {
    console.log(result);
    if (result.length === 0) {
      let data_insert = [
        qtt,
        product_id,
        user_id,
        inovice_id,
        created_at,
        updated_at,
      ];
      let sql =
        "insert into orders" +
        "(qtt,product_id,user_id,inovice_id,created_at,updated_at) " +
        "values ?";
      database.connection.query(
        sql,
        [[data_insert]],
        function (err, result, fields) {
          if (err) console.log("error : ", err);
          let sql = "SELECT * FROM orders where inovice_id=" + inovice_id;
          database.connection.query(sql, null, function (err, result, fields) {
            console.log(result);
            callback(err, result);
          });
        }
      );
    }else{
      console.log(result[0].id);
      newqtt = Number(qtt) + Number(result[0].qtt);
      let sqlUpdatQtt =
        "UPDATE `orders` SET `qtt`=" + newqtt + " WHERE " + result[0].id;
      database.connection.query(
        sqlUpdatQtt,
        null,
        function (err, result, fields) {
          if (err) console.log("error : ", err);
          let sql = "SELECT * FROM orders where inovice_id=" + inovice_id;
          database.connection.query(sql, null, function (err, result, fields) {
            console.log(result);
            callback(err, result);
          });
        }
      );
    };
  });
};

exports.order_add = order_add;
exports.get_orders = get_orders;
