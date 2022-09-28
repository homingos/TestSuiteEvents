var apiController = require('./ApiController.js');
var appUpdate = require('./AppUpdate.js');
var onBoarding = require('./OnBoarding.js');
var navigation = require('./Navigation.js');
var creation = require('./Creation.js');
var feed = require('./Feed.js');
var share = require('./Share.js');
var profile = require('./Profile.js');
var explore = require('./Explore.js');
var nudge = require('./Nudge.js');

let event_url = 'https://streams.flamapp.com/flamV2-dev-clickstream';
var event_test_url = 'https://jsonplaceholder.typicode.com/posts';


let getUsersUrl = "https://dev.flamapp.com/thanos/v1/user-profile/admin/profiles";
let umsToken = "4c6e5d06-0d8e-4026-9a61-fc3d75fda1b0";

let getExperiencesUrl = "https://dev.homingos.com/wolverine/v1/experience/admin/all?page=0&page_size=5";
let getMovesUrl = "https://dev.homingos.com/wolverine/v1/move/admin/all?page=0&page_size=5";
let adminToken = "fd8f7b60-9a6c-4124-83fd-b7809fb6cf2e";
let getScenesUrl = "https://dev.homingos.com/wolverine/v1/scene/admin/all?page=0&page_size=5";
let getMusicUrl = "https://dev.homingos.com/wolverine/v1/music/admin/all?page=0&page_size=5";
// let users = apiController.getUsers(getUsersUrl, umsToken);
// let experiences = apiController.getExperiences(getExperiencesUrl, experiencesToken);
//console.log("GETTING DATA");

var ts = "2022-09-02 17:35:45.004567";

function get_correct_url(){
    return event_test_url;
}
apiController.getServerData(getMovesUrl, adminToken, function(err, moves){
    if (err){
        console.error(err);
    }
    currenturl = get_correct_url();
    //console.log("MOVES DONE ", moves.length);
    //console.log(moves);
    apiController.getServerData(getMusicUrl, adminToken, function(err, music){
        if (err){
            console.error(err);
        }
        //console.log("MUSIC DONE ", music.length);
        

        apiController.getServerData(getScenesUrl, adminToken, function(err, scene){
            if (err){
                console.error(err);
            }
            //console.log("Scene DONE ", scene.length);

            apiController.getServerData(getExperiencesUrl, adminToken, function(err, exp){
                if (err){
                    console.error(err);
                }
                //console.log("Exp DONE ", exp.length);

            apiController.getUserData(getUsersUrl, umsToken, function(err, users){
                if (err){
                    console.error(err);
                }
                console.log("Users ", users[0]);
                console.log("Length ", users.length);
                //console.log("Scene ", scene[0]);
                //console.log("Music", music[0]);
                //console.log("Move", moves[0]);
                //console.log("experience", exp[0]);
                var uid = 0;
                onBoarding.sendOnBoardingEvent(currenturl, users[uid], users[uid].transition_id, ts);
                var timechange = "";
                //navigation.sendNavigationEvent(currenturl, users[0].transition_id, users[0], ts);
                //appUpdate.sendAppUpdateEvent(currenturl, users[0].transition_id, users[0], ts);
                })
            })
        })

    })
  
})
