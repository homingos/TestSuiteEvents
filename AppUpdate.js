const axios = require('axios');
const JsonData = require("./DummyData");
const uuid = require('uuid');
//uuid()

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
  }

var sendAppUpdateEvent = function(event_url, user_id, guest_user_profile_id){
    var postData= {data:JSON.parse(JsonData.empty)}
    // POST
    postData.data.log_id = create_UUID();
    postData.data.device_id = create_UUID();
    postData.data.user_profile_id = user_id;
    postData.data.country = "IND";
    postData.data.log_time = "2023-09-18 17:35:25.004567";
    postData.data.ip = "168.212.226.204";
    postData.data.device_details.device_type = "One Plus 9";
    postData.data.device_details.os = "android";
    postData.data.device_details.platform = "Android";
    postData.data.ui_variant = "1";
    postData.data.psid = create_UUID();
    postData.data.csid = create_UUID();
    postData.data.ssid = create_UUID();
    postData.data.meta_data = "false";
    postData.data.user_details.guest_user_profile_id = guest_user_profile_id;
    postData.data.user_details.is_guest = "false";
    postData.data.adjust_event_id = "";
    postData.data.event_id = "appupdate";
    postData.data.event_category = "App Update";
    postData.data.event_type = "Page View Event";
    postData.data.event_name = "Prompt Update";
    postData.data.data.social_media_platform = "Facebook";
    postData.data.data.refer.marketing_channel = "Facebook";
    postData.data.app_version = "0.1.1";
    postData.data.data.experience.is_creation = "false";
    axios.post(event_url, postData).then(function (response) {
        console.log("1st req");
        console.log(postData);
        postData.data.log_id = create_UUID();
        postData.data.ssid = create_UUID();
        postData.data.log_time = "2023-09-18 17:35:45.004567";
        postData.data.adjust_event_id = "appforce";
        postData.data.event_id = "appupdate";
        postData.data.event_name = "Prompt Force Update";
        axios.post(event_url, postData).then(()=>{
            console.log("2nd req");
            console.log(postData);
            postData.data.meta_data = "true";
            postData.data.log_id = create_UUID();
            postData.data.ssid = create_UUID();
            postData.data.log_time = "2023-09-18 17:35:55.004567";
            postData.data.adjust_event_id = "appupnow";
            postData.data.event_id = "appupdate";
            postData.data.event_type = "CTA";
            postData.data.event_name = "Update Now";
            axios.post(event_url, postData).then(()=>{
                console.log("3rd req");
                console.log(postData);
                postData.data.log_id = create_UUID();
                postData.data.ssid = create_UUID();
                postData.data.log_time = "2023-09-18 17:36:05.004567";
                postData.data.adjust_event_id = "appdecup";
                postData.data.event_id = "appupdate";
                postData.data.event_name = "Declined Update";
                axios.post(event_url, postData).then(()=>{
                    console.log("4rth req");
                    console.log(postData);
                })
            })
        })
    })
    .catch(function (error) {
        console.log(error.data);
    })
}

module.exports = {sendAppUpdateEvent}