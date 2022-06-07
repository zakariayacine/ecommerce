let timeStamp = function (callback){
   date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
let year = date_ob.getFullYear();
// current hours
let hours = date_ob.getHours();
// current minutes
let minutes = date_ob.getMinutes();
// current seconds
let seconds = date_ob.getSeconds();
// callback date & time in YYYY-MM-DD HH:MM:SS format
callback('',year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);
}
exports.timeStamp = timeStamp;
