const axios = require('axios');
const JsonData = require("./DummyData");
const uuid = require('./GetUUID.js');
const timeinc = require('./TimeIncrementer.js');

var sendAppUpdateEvent = function(event_url, user_id, guest_user_profile_id, log_time){
    var postData= {data:JSON.parse(JsonData.empty)}
    //POST
    postData.data.log_id = uuid.create_UUID();
    postData.data.device_id = uuid.create_UUID();
    postData.data.user_profile_id = user_id;
    postData.data.country = "IN";
    postData.data.log_time = log_time;
    postData.data.ip = "168.212.226.204";
    postData.data.device_details.device_type = "One Plus 9";
    postData.data.device_details.os = "android";
    postData.data.device_details.platform = "Android";
    postData.data.ui_variant = "1";
    postData.data.psid = uuid.create_UUID();
    postData.data.csid = uuid.create_UUID();
    postData.data.ssid = uuid.create_UUID();
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
        postData.data.log_id = uuid.create_UUID();
        postData.data.ssid = uuid.create_UUID();
        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
        postData.data.adjust_event_id = "appforce";
        postData.data.event_id = "appupdate";
        postData.data.event_name = "Prompt Force Update";
        axios.post(event_url, postData).then(()=>{
            console.log("2nd req");
            console.log(postData);
            postData.data.meta_data = "true";
            postData.data.log_id = uuid.create_UUID();
            postData.data.ssid = uuid.create_UUID();
            postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
            postData.data.adjust_event_id = "appupnow";
            postData.data.event_id = "appupdate";
            postData.data.event_type = "CTA";
            postData.data.event_name = "Update Now";
            axios.post(event_url, postData).then(()=>{
                console.log("3rd req");
                console.log(postData);
                postData.data.log_id = uuid.create_UUID();
                postData.data.ssid = uuid.create_UUID();
                postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
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