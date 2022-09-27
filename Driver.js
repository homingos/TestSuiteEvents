var apiController = require('./ApiController.js');
var appUpdate = require('./AppUpdate.js');

let event_url = 'https://streams.flamapp.com/flamV2-dev-clickstream';
var event_test_url = 'https://jsonplaceholder.typicode.com/posts';


let getUsersUrl = "https://api.flamapp.com/flink/ums/getUsers";
let umsToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMWRjMGMzMy1hMmQ4LTRkMzktYWU5NC03NmM4M2Q5OTkwZTQiLCJkYXRhIjoiZGM5MDlmM2VkZGQ1YjA2ZjBkYmYyMGE0MmQyYzUwYmYyMzdiN2Q3YTIzMTdjMDE5MmE2Y2FkNGUzNTM2NmEwMDVmYTdhMzNjNjMxMjI3ZmExNzJiYzE3MGUwYmI0MDkzMzU5OGViZDdlZTUzZDlhOTAyOGNmZmEwMTdiZDgxNjk1ZDk0MTQ3NTlmOGViMjVhMTZlNjliMmJlZmMwNzk5MjJkODljMWVlMzg0Y2NiZGY4YmI3Njc2NWFhZWY3MDA3ZjFjNmYzOGE3M2Q2NGI0M2QyYTA2M2NkYTk0ZDIyOGYxODdhYjUwOTY4YmViMmY0ZTNhMmE0MTcyMjIxZjVmZDkxMDAxZGU4ZWQ3NDcyOWYyOTkxZWYwZWZkYmRmZGIyY2E5MGJjZDY1NDliMWVhNDZkNDhmYjdiMWVkODdlOTFhYmJmMzI3ZmFkMzZjNzczYmI4ODdmNzk2N2UzM2M1MTUwNGNiYzdiZWI4MWFiMTVjY2E3ZWYyMTc5YzQ0N2RmY2M1YTY4OWFhNDk0NzhmMzM1NjBjMTI1OGYyNWI3M2UwMTNmZmE2NmI5ZjViNjY0MzBjY2U0OGE0NjZmMTJlZGRmODlmMDRhNzJlOTI2NjEzZThhODQxYzAyMjg4YjI2ZWEzMDlkMDcyM2EzZTA0MWFmZWE3MGU4NzBiOWZlNDczNDVmNjgwZDRhMGRhZTEyMzViNjM2ZWVkMzA1MjA0YjliNDYzZDc4NDVkNTY0N2FlNmVkN2U3YjkzYTA5N2VmNWE2ZGUyMGZmNTQ4MGIwZGI1MjRhN2YxM2RlYjIxMTYwZjQ0ZTJiMDQ1YjAwZGI3ZmJmOGFlODllZmZhNjhlZDFhZGU0ZmM2YWJkMzBkNjFkNjQwNzVmZTMxMmZlOTI3MjQyYmZiOGZkYjg4NmNmNTZmOGNiYzYwZTc2MTVkNDIyYzA4M2U5MTU4MjkwYWE2YmYyZjkyNDhhZTFlMzM2NDA5ZGI4YmY3ZDQxNGY1YTI4Y2QxNDAzODAyZmJmZjljNzgwNDA0YjU2MWFiOTg3ODJhY2JlNzI4MmYzZjcyYjAiLCJpYXQiOjE2NjQyNjQyODgsImV4cCI6MTY5NTgyMTg4OH0.UaZUlGGyqJJRMIpgAH1pEmSFDzI3Cf1TADqrcu295n0";
let getExperiencesUrl = "https://api.flamapp.com/flink/ums/getExperiences";
let getMovesUrl = "https://api.flamapp.com/flink/ums/getMoves";
let getScenesUrl = "https://api.flamapp.com/flink/ums/getScenes";
let getMusicUrl = "https://api.flamapp.com/flink/ums/getMusic";
let experiencesToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjMWRjMGMzMy1hMmQ4LTRkMzktYWU5NC03NmM4M2Q5OTkwZTQiLCJkYXRhIjoiZGM5MDlmM2VkZGQ1YjA2ZjBkYmYyMGE0MmQyYzUwYmYyMzdiN2Q3YTIzMTdjMDE5MmE2Y2FkNGUzNTM2NmEwMDVmYTdhMzNjNjMxMjI3ZmExNzJiYzE3MGUwYmI0MDkzMzU5OGViZDdlZTUzZDlhOTAyOGNmZmEwMTdiZDgxNjk1ZDk0MTQ3NTlmOGViMjVhMTZlNjliMmJlZmMwNzk5MjJkODljMWVlMzg0Y2NiZGY4YmI3Njc2NWFhZWY3MDA3ZjFjNmYzOGE3M2Q2NGI0M2QyYTA2M2NkYTk0ZDIyOGYxODdhYjUwOTY4YmViMmY0ZTNhMmE0MTcyMjIxZjVmZDkxMDAxZGU4ZWQ3NDcyOWYyOTkxZWYwZWZkYmRmZGIyY2E5MGJjZDY1NDliMWVhNDZkNDhmYjdiMWVkODdlOTFhYmJmMzI3ZmFkMzZjNzczYmI4ODdmNzk2N2UzM2M1MTUwNGNiYzdiZWI4MWFiMTVjY2E3ZWYyMTc5YzQ0N2RmY2M1YTY4OWFhNDk0NzhmMzM1NjBjMTI1OGYyNWI3M2UwMTNmZmE2NmI5ZjViNjY0MzBjY2U0OGE0NjZmMTJlZGRmODlmMDRhNzJlOTI2NjEzZThhODQxYzAyMjg4YjI2ZWEzMDlkMDcyM2EzZTA0MWFmZWE3MGU4NzBiOWZlNDczNDVmNjgwZDRhMGRhZTEyMzViNjM2ZWVkMzA1MjA0YjliNDYzZDc4NDVkNTY0N2FlNmVkN2U3YjkzYTA5N2VmNWE2ZGUyMGZmNTQ4MGIwZGI1MjRhN2YxM2RlYjIxMTYwZjQ0ZTJiMDQ1YjAwZGI3ZmJmOGFlODllZmZhNjhlZDFhZGU0ZmM2YWJkMzBkNjFkNjQwNzVmZTMxMmZlOTI3MjQyYmZiOGZkYjg4NmNmNTZmOGNiYzYwZTc2MTVkNDIyYzA4M2U5MTU4MjkwYWE2YmYyZjkyNDhhZTFlMzM2NDA5ZGI4YmY3ZDQxNGY1YTI4Y2QxNDAzODAyZmJmZjljNzgwNDA0YjU2MWFiOTg3ODJhY2JlNzI4MmYzZjcyYjAiLCJpYXQiOjE2NjQyNjQyODgsImV4cCI6MTY5NTgyMTg4OH0.UaZUlGGyqJJRMIpgAH1pEmSFDzI3Cf1TADqrcu295n0";

let users = apiController.getUsers(getUsersUrl, umsToken);
let experiences = apiController.getExperiences(getExperiencesUrl, experiencesToken);
let moves = apiController.getMoves(getMovesUrl, experiencesToken);
let music = apiController.getMusic(getMusicUrl, experiencesToken);
let scenes = apiController.getScenes(getScenesUrl, experiencesToken); 

console.log(users, experiences, moves, music, scenes);

let ts = "2022-09-18 17:35:45.004567";

function get_correct_url(){
    return event_test_url;
}

let user = getUser();
//sendOnBoardingEvent(user);
//sendAppUpdateEvent(user);

//sendOnBoardingEvent();

function getUser(){
    let user = users[Math.floor(Math.random()*users.length)];
    return user;
}

function sendOnBoardingEvent(user, ts){
    url = get_correct_url();
    appUpdate.sendOnBoardingEvent(url, user.user_profile_id, user.user_guest_profile_id, ts);
    
}


function sendAppUpdateEvent(user, ts){
    url = get_correct_url();
    let user = users[Math.floor(Math.random()*users.length)];
    appUpdate.sendAppUpdateEvent(url, user.user_profile_id, user.user_guest_profile_id, ts);
}

function sendNudgeEvent(){

}
