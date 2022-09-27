const axios = require('axios');
const JsonData = require("./DummyData");
const uuid = require('uuid');
//uuid()
var postData= {data:JSON.parse(JsonData.empty)}

// POST
var url = 'https://streams.flamapp.com/flamV2-dev-clickstream'
var testurl = 'https://jsonplaceholder.typicode.com/posts'
function create_UUID(){
  var dt = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);
      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
  });
  return uuid;
}

postData.data.log_id = create_UUID();
postData.data.device_id = create_UUID();
postData.data.country = "IND";
postData.data.ip = "168.212.226.204";
postData.data.log_time = "2022-09-01 19:30:25.000012";
postData.data.user_details.avatar_url = "www.youtube.com";
postData.data.user_profile_id = "b7a66a11-6ea2-4df1-a2c8-8f23ad5d4902";
postData.data.user_details.guest_user_profile_id = "9940c74-ed38-4305-861b-e1ebfa783a6e";
postData.data.user_details.is_guest = "false";
postData.data.device_details.device_type = "One Plus 9";
postData.data.device_details.os = "android";
postData.data.device_details.platform = "Android";
postData.data.ui_variant = "1";
postData.data.psid = create_UUID();
postData.data.csid = create_UUID();
postData.data.ssid = create_UUID();
postData.data.meta_data = "false";
postData.data.adjust_event_id = "eventid";
postData.data.event_id = "eventid";
postData.data.event_category = "Share";
postData.data.event_type = "CTA";
postData.data.event_name = "Share Experience";
postData.data.data.social_media_platform = "Facebook";
postData.data.data.refer.marketing_channel = "Facebook";
postData.data.event_description = "";
postData.data.data.experience.scene_id = create_UUID();
postData.data.data.experience.move_id = create_UUID();
postData.data.data.experience.music_id = create_UUID();
postData.data.data.experience.is_public = "true";
postData.data.data.experience.is_shared = "true";
postData.data.data.experience.is_creation = "false";
postData.data.data.experience.experience_id = "ksdjh789-9ik8-4df1-8uj7-8f23ad5d4902";
postData.data.data.experience.creator_info = "op9ik789-4r3e-90ok-6tg5-8f23ad5d4902";
postData.data.app_version = "0.1.1";
axios.post(testurl, postData).then(function (response) {
    //console.log("1 req");
    console.log(postData);
})
.catch(function (error) {
    console.log(error.data);
})