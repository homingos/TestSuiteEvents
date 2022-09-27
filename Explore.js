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
postData.data.user_profile_id = "";
postData.data.country = "IN";
postData.data.ip = "168.212.226.204";
postData.data.log_time = new Date().getTime();;
postData.data.log_time = "2022-11-16 16:32:05.000023";
postData.data.user_details.avatar_url = "";
postData.data.meta_data = "false";
postData.data.user_profile_id = create_UUID();
postData.data.user_details.is_guest = "true";
postData.data.device_details.device_type = "One Plus 9";
postData.data.device_details.os = "android";
postData.data.device_details.platform = "Android";
postData.data.ui_variant = "1";
postData.data.psid = create_UUID();
postData.data.csid = create_UUID();
postData.data.ssid = create_UUID();
postData.data.adjust_event_id = "eventid";
postData.data.event_id = "eventid";
postData.data.event_category = "Explore";
postData.data.event_type = "Page View Event";
postData.data.event_name = "Explore Page";
postData.data.data.social_media_platform = "Facebook";
postData.data.event_description = "";
postData.data.app_version = "0.1.1";
axios.post(url, postData).then(function (response) {
    console.log("1 req");
    console.log(postData);
    postData.data.log_id = create_UUID();
    postData.data.log_time = "2022-11-16 16:32:10.000023";
    postData.data.ssid = create_UUID();
    postData.data.event_type = "CTA";
    postData.data.event_name = "View Profile";
    axios.post(url, postData).then(()=>{
        console.log("2 req");
        console.log(postData);
        postData.data.log_id = create_UUID();
        postData.data.log_time = "2022-11-16 16:32:15.000023";
        postData.data.ssid = create_UUID();
        postData.data.event_type = "CTA";
        postData.data.event_name = "More - Profiles";
        axios.post(url, postData).then(()=>{
            console.log("3 req");
            console.log(postData);
            postData.data.log_id = create_UUID();
            postData.data.log_time = "2022-11-16 16:32:25.000023";
            postData.data.ssid = create_UUID();
            postData.data.event_type = "Page View Event";
            postData.data.event_name = "Profile List";
            axios.post(url, postData).then(()=>{
                console.log("4 req");
                console.log(postData);
                postData.data.log_id = create_UUID();
                postData.data.log_time = "2022-11-16 16:32:35.000023";
                postData.data.ssid = create_UUID();
                postData.data.event_type = "CTA";
                postData.data.event_name = "Back";
                axios.post(url, postData).then(()=>{
                    console.log("5 req");
                    console.log(postData);
                    postData.data.log_id = create_UUID();
                    postData.data.log_time = "2022-11-16 16:32:40.000023";
                    postData.data.ssid = create_UUID();
                    postData.data.meta_data = "true";
                    postData.data.event_type = "CTA";
                    postData.data.event_name = "View Experience";
                    axios.post(url, postData).then(()=>{
                        console.log("6 req");
                        console.log(postData);
                        postData.data.log_id = create_UUID();
                        postData.data.log_time = "2022-11-16 16:32:45.000023";
                        postData.data.ssid = create_UUID();
                        postData.data.event_type = "CTA";
                        postData.data.event_name = "More - Trending Experiences";
                        axios.post(url, postData).then(()=>{
                            console.log("7 req");
                            console.log(postData);
                            postData.data.log_id = create_UUID();
                            postData.data.log_time = "2022-11-16 16:32:50.000023";
                            postData.data.ssid = create_UUID();
                            postData.data.event_type = "Page View Event";
                            postData.data.event_name = "Trending Experiences";
                            axios.post(url, postData).then(()=>{
                                console.log("8 req");
                                console.log(postData);
                                postData.data.log_id = create_UUID();
                                postData.data.log_time = "2022-11-16 16:32:55.000023";
                                postData.data.ssid = create_UUID();
                                postData.data.event_type = "CTA";
                                postData.data.event_name = "More - Hashtag Experiences";
                                axios.post(url, postData).then(()=>{
                                    console.log("9 req");
                                    console.log(postData);
                                    postData.data.log_id = create_UUID();
                                    postData.data.log_time = "2022-11-16 16:33:05.000023";
                                    postData.data.ssid = create_UUID();
                                    postData.data.event_type = "Page View Event";
                                    postData.data.event_name = "Hashtag - Experiences";
                                    axios.post(url, postData).then(()=>{
                                        console.log("10 req");
                                        console.log(postData);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
.catch(function (error) {
    console.log(error.data);
})