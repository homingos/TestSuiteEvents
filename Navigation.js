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
postData.data.log_time = "2023-09-18 19:41:55.000023";
postData.data.user_details.avatar_url = "";
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
postData.data.adjust_event_id = "";
postData.data.data.experience.is_creation = "false";
postData.data.event_id = "eventid";
postData.data.event_category = "Navigation Bar Redirection";
postData.data.event_type = "CTA";
postData.data.event_name = "Creation";
postData.data.data.social_media_platform = "Facebook";
postData.data.data.refer.marketing_channel = "Facebook";
postData.data.event_description = "";
postData.data.app_version = "0.1.1";
axios.post(url, postData).then(function (response) {
    console.log("1 req");
    console.log(postData);
    postData.data.log_id = create_UUID();
    postData.data.log_time = "2023-09-18 19:42:05.000023";
    postData.data.ssid = create_UUID();
    postData.data.event_name = "Notification";
    axios.post(url, postData).then(()=>{
        console.log("2 req");
        console.log(postData);
        postData.data.log_id = create_UUID();
        postData.data.ssid = create_UUID();
        postData.data.event_name = "Home";
        axios.post(url, postData).then(()=>{
            console.log("3 req");
            console.log(postData);
            postData.data.meta_data = "true";
            postData.data.log_id = create_UUID();
            postData.data.log_time = "2023-09-18 19:42:15.004567";
            postData.data.ssid = create_UUID();
            postData.data.event_name = "Explore";
            axios.post(url, postData).then(()=>{
                console.log("4 req");
                console.log(postData);
                postData.data.log_id = create_UUID();
                postData.data.log_time = "2023-09-18 19:42:25.004567";
                postData.data.ssid = create_UUID();
                postData.data.event_name = "Profile";
                axios.post(url, postData).then(()=>{
                    console.log("5 req");
                    console.log(postData);
                })
            })
        })
    })
})
.catch(function (error) {
    console.log(error.data);
})