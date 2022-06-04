const database = require('./database')

let get_employes = function (callback){

    let sql = 'select * from employe\n' +
        ' inner join salaire on employe.ID_SALAIRE = salaire.ID_SALAIRE\n';
        ' inner join services on employe.ID_SERVICE = services.ID_SERVICE';
    database.connection.query(sql,null,function (err,result,fields){

        if(err) console.log('error : ',err);

        callback(err,result)
    });
}


let employe_add = function (nom,prenom,service,salaire,callback){

    let data_insert = [nom,prenom,service,salaire]; //une seule insertion

    let sql = "insert into employe\n" +
        "(NOM_EMP, PRENOM_EMP, ID_SERVICE, ID_SALAIRE)\n" +
        "values ?";



    database.connection.query(sql,[[data_insert]],function (result,err,fields) {

        if (err) console.log('error : ', err);

        console.log(result)

        callback(err, result)
    })


}



let employe_update = function (id,nom,prenom,service,salaire,callback){

    let data_update = {
        ID_EMP:id,
        NOM_EMP:nom,
        PRENOM_EMP:prenom,
        ID_SERVICE:service,
        ID_SALAIRE:salaire
    };

    let sql = "update employe set ?";


    database.connection.query(sql,[data_update],function (result,err,fields) {

        if (err) console.log('error : ', err);

        callback(err, result)
    })


}


exports.get_employes = get_employes;
exports.employe_add = employe_add;
exports.employe_update = employe_update;








