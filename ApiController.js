const axios = require('axios');

var getUsers = function(url, token){
    axios.get(url, {headers: {Authorization: token}}).then((res)=>{
        return res.data.data;
    })
    .catch((err) => {
        console.error(err.data);
    });
}

var getServerData = function(url, token, callback){
    //console.log("GETTING  MOVES");
    let x;
    axios.get(url,{headers: {Authorization: token}})
    .then((res)=>{
        // console.log(res.data.data);
        callback(null, res.data.data);
    })
    .catch((err) => {
        callback(err, null)
    });
}

var getUserData = function(url, token, callback){
    //console.log("GETTING  MOVES");
    let x;
    axios.get(url,{headers: {"api-key": token}})
    .then((res)=>{
        // console.log(res.data.data);
        callback(null, res.data.data);
    })
    .catch((err) => {
        callback(err, null)
    });
}

    
// function getMoves(url, token) {
//     return axios({
//         url,
//         method: 'get',
//         timeout: 5000,
//         headers: {Authorization: token}
//     })
//     .then(res => res.data.data)
//     .catch (err => console.error(err))
// }

// var getScenes = function(url, token){
//     axios.get(url, {headers: {Authorization: token}}).then((res)=>{
//         return res.data.data;
//     })
//     .catch((err) => {
//         console.error(err.data);
//     });
// }

// var getExperiences = function(url, token){
//     axios.get(url, {headers: {Authorization: token}}).then((res)=>{
//         return res.data;
//     })
//     .catch((err) => {
//         console.error(err.data);
//     });
// }

// var getMusic = function(url, token){
//     axios.get(url, {headers: {Authorization: token}}).then((res)=>{
//         return res.data.data;
//     })
//     .catch((err) => {
//         console.error(err.data);
//     });
// }
// module.exports = {getMoves, getScenes, getMusic}
module.exports = {getServerData, getUserData}


// var getMoves = [
//         {uid: 1},
//         {uid: 2}
//     ]

// var getScenes = [
//         {uid: 1},
//         {uid: 2}
//     ]

// var getMusic = [
//         {uid: 1},
//         {uid: 2}
//     ]


// var getExperiences = [
//         {uid: 1},
//         {uid: 2}
//     ]
    // return [
    //     {user_profile_id: "b7a66a11-6ea2-4df1-a2c8-8f23ad5d4902", guest_user_profile_id: "9940c74-ed38-4305-861b-e1ebfa783a6e"},
    //     {user_profile_id: "b7a66a11-6ea2-4df1-a2c8-8f23ad5d4902", guest_user_profile_id: "9940c74-ed38-4305-861b-e1ebfa783a6e"},
    // ]