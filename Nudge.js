const axios = require('axios');
const JsonData = require("./DummyData");
const uuid = require('uuid');
const timeinc = require('./TimeIncrementer.js');
//uuid()

var sendNudgeEvent = function(event_url, device_id, user_id, guest_user_profile_id, log_time){
return new Promise((resolve, reject) => {
var postData= {data:JSON.parse(JsonData.empty)}
postData.data.log_id = uuid.create_UUID();
postData.data.device_id = device_id;
postData.data.user_profile_id = user_id;
//var upid = postData.data.user_profile_id;
postData.data.country = "IN";
postData.data.ip = "168.212.226.204";
postData.data.log_time = log_time;
postData.data.device_details.device_type = "One Plus 9";
postData.data.device_details.os = "android";
postData.data.device_details.platform = "Android";
postData.data.ui_variant = "1";
postData.data.psid = uuid.create_UUID();
postData.data.csid = uuid.create_UUID();
postData.data.ssid = uuid.create_UUID();
postData.data.meta_data = "false";
postData.data.user_details.guest_user_profile_id = guest_user_profile_id;
postData.data.user_details.is_guest = "true";
postData.data.adjust_event_id = "eventid";
postData.data.event_id = "eventid";
postData.data.event_category = "Nudge";
postData.data.event_type = "Page View Event";
postData.data.event_name = "Login/Signup";
postData.data.data.social_media_platform = "Facebook";
postData.data.app_version = "0.1.1";
axios.post(event_url, postData).then(function (response) {
    console.log("1st req");
    console.log(postData);
    postData.data.meta_data = "true";
    postData.data.user_details.guest_user_profile_id = postData.data.user_profile_id;
    postData.data.user_profile_id = "b7a66a11-6ea2-4df1-a2c8-8f23ad5d4902";
    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
    postData.data.log_id = uuid.create_UUID();
    postData.data.ssid = uuid.create_UUID();
    postData.data.adjust_event_id = "nudgesucc";
    postData.data.event_id = "nudgesucc";
    postData.data.event_type = "CTA";
    postData.data.event_name = "Successful";
    postData.data.user_details.is_guest = "false";
    postData.data.data.experience.is_creation = "false";
    axios.post(event_url, postData).then(()=>{
        console.log("2nd req");
        console.log(postData);
        postData.data.user_details.guest_user_profile_id = "";
        postData.data.user_details.is_guest = "true";
        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
        postData.data.log_id = uuid.create_UUID();
        postData.data.ssid = uuid.create_UUID();
        postData.data.adjust_event_id = "nudgedec";
        postData.data.event_id = "nudgedec";
        postData.data.event_type = "CTA";
        postData.data.event_name = "Declined";
        axios.post(event_url, postData).then(()=>{
            console.log("3rd req");
            console.log(postData);
        })
    })
  })
  .catch(function (error) {
    console.log(error.data);
  });
});
};

module.exports = {sendNudgeEvent}