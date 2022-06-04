const database = require('./database')

let get_services = function (callback){

    let sql = 'select * from services';
    database.connection.query(sql,null,function (err,result,fields){

        if(err) console.log('error : ',err);

        callback(err,result)

    });
}
exports.get_services = get_services;
