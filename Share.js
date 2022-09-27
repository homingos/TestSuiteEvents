const axios = require('axios');
const JsonData = require("./DummyData");
const uuid = require('uuid');
const uuid = require('./GetUUID.js');

var postData= {data:JSON.parse(JsonData.empty)}

// POST
var sendShareEvent = function(event_url, user_id, guest_user_profile_id, log_time){
postData.data.log_id = uuid.create_UUID();
postData.data.device_id = uuid.create_UUID();
postData.data.country = "IN";
postData.data.ip = "168.212.226.204";
postData.data.log_time = log_time;
postData.data.user_details.avatar_url = "www.youtube.com";
postData.data.user_profile_id = user_id;
postData.data.user_details.guest_user_profile_id = guest_user_profile_id;
postData.data.user_details.is_guest = "false";
postData.data.device_details.device_type = "One Plus 9";
postData.data.device_details.os = "android";
postData.data.device_details.platform = "Android";
postData.data.ui_variant = "1";
postData.data.psid = uuid.create_UUID();
postData.data.csid = uuid.create_UUID();
postData.data.ssid = uuid.create_UUID();
postData.data.meta_data = "false";
postData.data.adjust_event_id = "eventid";
postData.data.event_id = "eventid";
postData.data.event_category = "Share";
postData.data.event_type = "CTA";
postData.data.event_name = "Share Experience";
postData.data.data.social_media_platform = "Facebook";
postData.data.data.refer.marketing_channel = "Facebook";
postData.data.event_description = "";
postData.data.data.experience.scene_id = uuid.create_UUID();
postData.data.data.experience.move_id = uuid.create_UUID();
postData.data.data.experience.music_id = uuid.create_UUID();
postData.data.data.experience.is_public = "true";
postData.data.data.experience.is_shared = "true";
postData.data.data.experience.is_creation = "false";
postData.data.data.experience.experience_id = "ksdjh789-9ik8-4df1-8uj7-8f23ad5d4902";
postData.data.data.experience.creator_info = "op9ik789-4r3e-90ok-6tg5-8f23ad5d4902";
postData.data.app_version = "0.1.1";
axios.post(event_url, postData).then(function (response) {
    //console.log("1 req");
    console.log(postData);
})
.catch(function (error) {
    console.log(error.data);
})
}

module.exports = {sendShareEvent}