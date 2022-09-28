const axios = require('axios');
const JsonData = require("./DummyData");
const uuid = require('./GetUUID.js');
const timeinc = require('./TimeIncrementer.js');
//uuid()

var sendExploreEvent = function(event_url, user_id, guest_user_profile_id, log_time){
var postData= {data:JSON.parse(JsonData.empty)}

postData.data.log_id = uuid.create_UUID();
postData.data.device_id = uuid.create_UUID();
postData.data.user_profile_id = user_id;
postData.data.guest_user_profile_id = guest_user_profile_id;
postData.data.country = "IN";
postData.data.ip = "168.212.226.204";
// postData.data.log_time = new Date().getTime();;
postData.data.log_time = log_time;
postData.data.user_details.avatar_url = "";
postData.data.meta_data = "false";
postData.data.user_details.is_guest = "true";
postData.data.device_details.device_type = "One Plus 9";
postData.data.device_details.os = "android";
postData.data.device_details.platform = "Android";
postData.data.ui_variant = "1";
postData.data.psid = uuid.create_UUID();
postData.data.csid = uuid.create_UUID();
postData.data.ssid = uuid.create_UUID();
postData.data.adjust_event_id = "";
postData.data.event_id = "eventid";
postData.data.event_category = "Explore";
postData.data.event_type = "Page View Event";
postData.data.event_name = "Explore Page";
postData.data.data.social_media_platform = "Facebook";
postData.data.event_description = "";
postData.data.app_version = "0.1.1";
axios.post(event_url, postData).then(function (response) {
    console.log("1 req");
    console.log(postData);
    postData.data.log_id = uuid.create_UUID();
    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
    postData.data.ssid = uuid.create_UUID();
    postData.data.event_type = "CTA";
    postData.data.event_name = "View Profile";
    axios.post(event_url, postData).then(()=>{
        console.log("2 req");
        console.log(postData);
        postData.data.log_id = uuid.create_UUID();
        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
        postData.data.ssid = uuid.create_UUID();
        postData.data.event_type = "CTA";
        postData.data.event_name = "More - Profiles";
        axios.post(event_url, postData).then(()=>{
            console.log("3 req");
            console.log(postData);
            postData.data.log_id = uuid.create_UUID();
            postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
            postData.data.ssid = uuid.create_UUID();
            postData.data.event_type = "Page View Event";
            postData.data.event_name = "Profile List";
            axios.post(event_url, postData).then(()=>{
                console.log("4 req");
                console.log(postData);
                postData.data.log_id = uuid.create_UUID();
                postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                postData.data.ssid = uuid.create_UUID();
                postData.data.event_type = "CTA";
                postData.data.event_name = "Back";
                axios.post(event_url, postData).then(()=>{
                    console.log("5 req");
                    console.log(postData);
                    postData.data.log_id = uuid.create_UUID();
                    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                    postData.data.ssid = uuid.create_UUID();
                    postData.data.meta_data = "true";
                    postData.data.event_type = "CTA";
                    postData.data.event_name = "View Experience";
                    axios.post(event_url, postData).then(()=>{
                        console.log("6 req");
                        console.log(postData);
                        postData.data.log_id = uuid.create_UUID();
                        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                        postData.data.ssid = uuid.create_UUID();
                        postData.data.event_type = "CTA";
                        postData.data.event_name = "More - Trending Experiences";
                        axios.post(event_url, postData).then(()=>{
                            console.log("7 req");
                            console.log(postData);
                            postData.data.log_id = uuid.create_UUID();
                            postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                            postData.data.ssid = uuid.create_UUID();
                            postData.data.event_type = "Page View Event";
                            postData.data.event_name = "Trending Experiences";
                            axios.post(event_url, postData).then(()=>{
                                console.log("8 req");
                                console.log(postData);
                                postData.data.log_id = uuid.create_UUID();
                                postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                postData.data.ssid = uuid.create_UUID();
                                postData.data.event_type = "CTA";
                                postData.data.event_name = "More - Hashtag Experiences";
                                axios.post(event_url, postData).then(()=>{
                                    console.log("9 req");
                                    console.log(postData);
                                    postData.data.log_id = uuid.create_UUID();
                                    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                    postData.data.ssid = uuid.create_UUID();
                                    postData.data.event_type = "Page View Event";
                                    postData.data.event_name = "Hashtag - Experiences";
                                    axios.post(event_url, postData).then(()=>{
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
}

module.exports = {sendExploreEvent}