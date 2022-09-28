
const moment = require('moment');


var IncreaseTime = function(oldTime){
    let time = moment(oldTime).add(10, 's').format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return time;
}
module.exports = {IncreaseTime}
