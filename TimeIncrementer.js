
const moment = require('moment');


var IncreaseTime = function(oldTime){
    let time = moment(oldTime).add(20, 's').format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return time;
}

var IncreaseTimehr = function(oldTime){
    let time = moment(oldTime).add(1, 'h').format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return time;
}
var IncreaseTime2hr = function(oldTime){
    let time = moment(oldTime).add(2, 'h').format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return time;
}
var IncreaseTime3hr = function(oldTime){
    let time = moment(oldTime).add(3, 'h').format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return time;
}
var IncreaseTime4hr = function(oldTime){
    let time = moment(oldTime).add(4, 'h').format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return time;
}
var IncreaseTime5hr = function(oldTime){
    let time = moment(oldTime).add(5, 'h').format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return time;
}
var IncreaseTime6hr = function(oldTime){
    let time = moment(oldTime).add(6, 'h').format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return time;
}
var IncreaseTime7hr = function(oldTime){
    let time = moment(oldTime).add(7, 'h').format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return time;
}
//console.log(IncreaseTime7hr("2022-09-02 15:35:45.004567"));
module.exports = {IncreaseTime, IncreaseTimehr, IncreaseTime2hr, IncreaseTime3hr, IncreaseTime4hr, IncreaseTime5hr, IncreaseTime6hr, IncreaseTime7hr}
