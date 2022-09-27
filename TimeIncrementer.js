
const moment = require('moment');

const getNewIsoTime = (oldTime) => {
    let time = moment(oldTime).add(10, 's').format('YYYY-MM-DD HH:mm:ss.SSSSSS');
    return time;
  }
  
  console.log(getNewIsoTime('2022-09-18 17:31:25.004'));