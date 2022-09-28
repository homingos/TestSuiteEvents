const uuid = require('./GetUUID.js');

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
var TimeCounter = require('./TimeIncrementer.js');

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

var ts = "2022-09-02 14:35:45.004567";
var device_id = "f880e1b5-033a-42d9-ba3a-03f37452a187";
var timechange = "2022-09-02 15:00:45.004567";

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
            //console.log("Scene DONE ", scene);

            apiController.getServerData(getExperiencesUrl, adminToken, function(err, exp){
                if (err){
                    console.error(err);
                }
                //console.log("Exp DONE ", exp.length);

            apiController.getUserData(getUsersUrl, umsToken, function(err, users){
                if (err){
                    console.error(err);
                }

                var uid = 0;
                console.log(users[uid]._id);
                onBoarding.sendOnBoardingEvent(currenturl, device_id, users[uid].transition_id, users[uid]._id, ts);
                
                //var OnBoardingDone = true;
                TimeCounter.IncreaseTimehr(timechange);
                navigation.sendNavigationEvent(currenturl, device_id, users[uid]._id, users[uid].transition_id, timechange);                
                TimeCounter.IncreaseTime2hr(timechange);
                appUpdate.sendAppUpdateEvent(currenturl, device_id, users[uid]._id, users[uid].transition_id, timechange);
                TimeCounter.IncreaseTime3hr(timechange);
                profile.sendProfileEvent(currenturl, device_id, users[uid]._id, users[uid].transition_id, timechange, exp[0]._id);
                TimeCounter.IncreaseTime4hr(timechange);
                creation.sendCreationEvent(currenturl, device_id, users[uid]._id, users[uid].transition_id, timechange, moves[uid]._id, music[uid]._id, exp[uid]._id, scene[uid]._id);
                TimeCounter.IncreaseTime5hr(timechange);
                explore.sendExploreEvent(currenturl, device_id, users[uid]._id, users[uid].transition_id, timechange);
                TimeCounter.IncreaseTime6hr(timechange);
                feed.sendFeedEvent(currenturl, device_id, users[uid]._id, users[uid].transition_id, timechange, moves[uid]._id, music[uid]._id, exp[uid]._id, scene[uid]._id);
                TimeCounter.IncreaseTime7hr(timechange);
                share.sendShareEvent(currenturl, device_id, users[uid]._id, users[uid].transition_id, timechange, moves[uid]._id, music[uid]._id, exp[uid]._id, scene[uid]._id);
            })
            })
        })

    })
  
})
