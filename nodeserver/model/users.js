const database = require("./database");

let get_users = function (callback) {
  let sql = "select * from users";
  database.connection.query(sql, null, function (err, result, fields) {
    if (err) console.log("error : ", err);
    callback(err, result);
  });
};

let get_user = function (id, callback) {
  let sql = "select * from users where id=" + id;
  database.connection.query(sql, null, function (err, result, fields) {
    if (err) console.log("error : ", err);
    callback(err, result);
  });
};

let user_add = function (
  name,
  email,
  role,
  password,
  created_at,
  updated_at,
  callback
) {
  let data_insert = [name, email, role, password, created_at, updated_at]; //une seule insertion
  let sql =
    "insert into users\n" +
    "(name, email, role, password, created_at, updated_at)\n" +
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

let user_update = function (
  id,
  name,
  email,
  role,
  password,
  created_at,
  updated_at,
  callback
) {
  let data_update = {
    id: id,
    name: name,
    email: email,
    role: role,
    password: password,
    created_at: created_at,
    updated_at: updated_at,
  };

  let sql = "update users set ?";
  database.connection.query(sql, [data_update], function (result, err, fields) {
    if (err) console.log("error : ", err);
    callback(err, result);
  });
};

exports.get_users = get_users;
exports.get_user = get_user;
exports.user_add = user_add;
exports.user_update = user_update;
