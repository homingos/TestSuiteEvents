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
postData.data.user_profile_id = "9940c74-ed38-4305-861b-e1ebfa783a6e";
//var upid = postData.data.user_profile_id;
postData.data.country = "IND";
postData.data.ip = "168.212.226.204";
postData.data.log_time = "2022-10-15 10:40:55.546370";
postData.data.device_details.device_type = "One Plus 9";
postData.data.device_details.os = "android";
postData.data.device_details.platform = "Android";
postData.data.ui_variant = "1";
postData.data.psid = create_UUID();
postData.data.csid = create_UUID();
postData.data.ssid = create_UUID();
postData.data.meta_data = "false";
postData.data.user_details.guest_user_profile_id = "";
postData.data.user_details.is_guest = "true";
postData.data.adjust_event_id = "eventid";
postData.data.event_id = "eventid";
postData.data.event_category = "Nudge";
postData.data.event_type = "Page View Event";
postData.data.event_name = "Login/Signup";
postData.data.data.social_media_platform = "Facebook";
postData.data.app_version = "0.1.1";
axios.post(url, postData).then(function (response) {
    console.log("1st req");
    console.log(postData);
    postData.data.meta_data = "true";
    postData.data.user_details.guest_user_profile_id = postData.data.user_profile_id;
    postData.data.user_profile_id = "b7a66a11-6ea2-4df1-a2c8-8f23ad5d4902";
    postData.data.log_time = "2022-10-15 10:41:05.546370";
    postData.data.log_id = create_UUID();
    postData.data.ssid = create_UUID();
    postData.data.adjust_event_id = "nudgesucc";
    postData.data.event_id = "nudgesucc";
    postData.data.event_type = "CTA";
    postData.data.event_name = "Successful";
    postData.data.user_details.is_guest = "false";
    postData.data.data.experience.is_creation = "true";
    axios.post(url, postData).then(()=>{
        console.log("2nd req");
        console.log(postData);
        postData.data.user_details.guest_user_profile_id = "";
        postData.data.user_details.is_guest = "true";
        postData.data.log_time = "2022-10-15 10:41:15.546370";
        postData.data.log_id = create_UUID();
        postData.data.ssid = create_UUID();
        postData.data.adjust_event_id = "nudgedec";
        postData.data.event_id = "nudgedec";
        postData.data.event_type = "CTA";
        postData.data.event_name = "Declined";
        axios.post(url, postData).then(()=>{
            console.log("3rd req");
            console.log(postData);
        })
    })
  })
  .catch(function (error) {
    console.log(error.data);
  })