var apiController = require('./ApiController.js');
var appUpdate = require('./AppUpdate.js');

let event_url = 'https://streams.flamapp.com/flamV2-dev-clickstream';
var event_test_url = 'https://jsonplaceholder.typicode.com/posts';


let getUsersUrl = "https://api.flamapp.com/flink/ums/getUsers";
let umsToken = "randomUUID";
let getExperiencesUrl = "https://api.flamapp.com/flink/ums/getUsers";
let getMovesUrl = "https://api.flamapp.com/flink/ums/getUsers";
let getScenesUrl = "https://api.flamapp.com/flink/ums/getUsers";
let getMusicUrl = "https://api.flamapp.com/flink/ums/getUsers";
let experiencesToken = "randomUUID";

let users = apiController.getUsers(getUsersUrl, umsToken);
let experiences = apiController.getExperiences(getExperiencesUrl, experiencesToken);
let moves = apiController.getMoves(getMovesUrl, experiencesToken);
let music = apiController.getMusic(getMusicUrl, experiencesToken);
let scenes = apiController.getScenes(getScenesUrl, experiencesToken);

console.log(users, experiences, moves, music, scenes);

function get_correct_url(){
    return event_test_url;
}

sendAppUpdateEvent();

sendOnBoardingEvent();

function sendOnBoardingEvent(){

}


function sendAppUpdateEvent(){
    url = get_correct_url();
    let user = users[Math.floor(Math.random()*users.length)];
    appUpdate.sendAppUpdateEvent(url, user.user_profile_id, user.user_guest_profile_id);
}

function sendNudgeEvent(){

}
