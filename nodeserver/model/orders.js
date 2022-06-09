const database = require("./database");
const usefull = require("./usefull");

//controller get orders
let get_orders = function (id, callback) {
  let sql = "select * from orders where inovice_id=" + id;
  database.connection.query(sql, null, function (err, result, fields) {
    if (err) console.log("error : ", err);
    get_order_products_detail(id,function(err,result){
      callback(err,result);
    })
  });
};
//controller add order
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
//controller quantity alter
let order_qtt_change = function (id, oper, callback) {
  select_one_order(id, function (err, result) {
    if (result.length === 0) {
      callback((err = "dont exist"), (result = "null"));
    } else {
      if (result.length > 0) {
        if (Number(result[0].qtt) === 1 && Number(oper) === 0) {
          delete_one_order(id, function (err, result) {
            callback(err, (result = "order product deleted"));
          });
        } else if (Number(oper) === 0) {
          qtt_alter_order(id, "-", function (err, result) {
            callback(err, result);
            console.log(result);
          });
        } else if (Number(oper) === 1) {
          qtt_alter_order(id, "+", function (err, result) {
            callback(err, result);
          });
        }
      }
    }
  });
};

//function quantity alter
let qtt_alter_order = function (id, operator, callback) {
  let sql = "Update orders Set qtt = qtt " + operator + " 1 Where id=" + id;
  database.connection.query(sql, null, function (err, result) {
    callback(err, result);
  });
};
//function to select one
let delete_one_order = function (id, callback) {
  let sql = "DELETE FROM orders WHERE id =" + id;
  database.connection.query(sql, null, function (err, result) {
    callback(err, result);
  });
};

//function to select one
let select_one_order = function (id, callback) {
  let sql = "SELECT * FROM ORDERS WHERE id=" + id;
  database.connection.query(sql, null, function (err, result) {
    callback(err, result);
  });
};

//function to add order || update quantity if exist
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
          get_orders(inovice_id,function(err, result){
            callback(err,result);
          });
        }
      );
    } else {
      console.log(result[0].id);
      newqtt = Number(qtt) + Number(result[0].qtt);
      let sqlUpdatQtt =
        "UPDATE `orders` SET `qtt`=" + newqtt + " WHERE " + result[0].id;
      database.connection.query(
        sqlUpdatQtt,
        null,
        function (err, result, fields) {
          if (err) console.log("error : ", err);
          get_orders(inovice_id,function(err, result){
            callback(err,result);
          });
        }
      );
    }
  });
};
//function get name and price and total price for order
let get_order_products_detail = function(inovice_id, callback){
 let sql = "SELECT o.id, qtt, name, price, inovice_id, photos, qtt*price as total  FROM orders o INNER JOIN products p ON o.product_id = p.id WHERE o.inovice_id ="+inovice_id;
database.connection.query(sql,null,function(err,result){
 callback(err,result);
});
}
exports.order_add = order_add;
exports.get_orders = get_orders;
exports.order_qtt_change = order_qtt_change;
