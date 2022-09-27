
const moment = require('moment');


var IncreaseTime = function(oldTime){
    let time = moment(oldTime).add(10, 's').format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return time;
}
console.log(IncreaseTime("2022-09-18 17:35:45.004567"));
module.exports = {IncreaseTime}
