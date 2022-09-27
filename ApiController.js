const axios = require('axios');
const uuid = require('uuid');
var getUsers = function(url, token){
    axios.get(url, {headers: {Authorization: token}}).then((res)=>{
        return res.data;
    })
    .catch((err) => {
        console.error(err);
    });
}

var getMoves = function(url, token){
    axios.get(url, {headers: {Authorization: token}}).then((res)=>{
        return res.data;
    })
    .catch((err) => {
        console.error(err);
    });
}

var getScenes = function(url, token){
    axios.get(url, {headers: {Authorization: token}}).then((res)=>{
        return res.data;
    })
    .catch((err) => {
        console.error(err);
    });
}

var getExperiences = function(url, token){
    axios.get(url, {headers: {Authorization: token}}).then((res)=>{
        return res.data;
    })
    .catch((err) => {
        console.error(err);
    });
}

var getMusic = function(url, token){
    axios.get(url, {headers: {Authorization: token}}).then((res)=>{
        return res.data;
    })
    .catch((err) => {
        console.error(err);
    });
}
module.exports = {getExperiences, getUsers, getMoves, getScenes, getMusic}


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