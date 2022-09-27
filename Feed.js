const axios = require('axios');
const JsonData = require("./DummyData");
const uuid = require('./GetUUID.js');


var postData= {data:JSON.parse(JsonData.empty)}

// POST
var url = 'https://streams.flamapp.com/flamV2-dev-clickstream'
var testurl = 'https://jsonplaceholder.typicode.com/posts'

postData.data.log_id = uuid.create_UUID();
postData.data.device_id = uuid.create_UUID();
postData.data.user_profile_id = "b7a66a11-6ea2-4df1-a2c8-8f23ad5d4902";
postData.data.country = "IN";
postData.data.ip = "168.212.226.204";
postData.data.log_time = "2023-09-18 18:00:00.000012";
postData.data.user_details.avatar_url = "";
postData.data.user_details.guest_user_profile_id = "9940c74-ed38-4305-861b-e1ebfa783a6e";
postData.data.user_details.is_guest = "false";
postData.data.device_details.device_type = "One Plus 9";
postData.data.device_details.os = "android";
postData.data.device_details.platform = "Android";
postData.data.ui_variant = "1";
postData.data.psid = uuid.create_UUID();
postData.data.csid = uuid.create_UUID();
postData.data.ssid = uuid.create_UUID();
postData.data.meta_data = "false";
postData.data.adjust_event_id = "";
postData.data.event_id = "eventid";
postData.data.event_category = "Feed";
postData.data.event_type = "CTA";
postData.data.event_name = "Tap to Play Feed";
postData.data.data.social_media_platform = "Facebook";
postData.data.data.refer.marketing_channel = "Facebook";
postData.data.event_description = "";
postData.data.app_version = "0.1.1";
axios.post(url, postData).then(function (response) {
    console.log("1 req");
    console.log(postData);
    postData.data.log_id = uuid.create_UUID();
    postData.data.log_time = "2023-09-18 18:05:05.000012";
    postData.data.ssid = uuid.create_UUID();
    postData.data.event_name = "Tap to Play Feed - Failed";
    axios.post(url, postData).then(()=>{
        console.log("2 req");
        console.log(postData);
        postData.data.log_id = uuid.create_UUID();
        postData.data.log_time = "2023-09-18 18:05:10.000012";
        postData.data.ssid = uuid.create_UUID();
        postData.data.event_name = "Reset Ground Plane";
        axios.post(url, postData).then(()=>{
            console.log("3 req");
            console.log(postData);
            postData.data.log_id = uuid.create_UUID();
            postData.data.log_time = "2023-09-18 18:05:15.000012";
            postData.data.ssid = uuid.create_UUID();
            postData.data.event_type = "Page View Event";
            postData.data.event_name = "Ground Plane Loader";
            axios.post(url, postData).then(()=>{
                console.log("4 req");
                console.log(postData);
                postData.data.log_id = uuid.create_UUID();
                postData.data.log_time = "2023-09-18 18:05:20.000012";
                postData.data.ssid = uuid.create_UUID();
                postData.data.event_name = "Experience Loader";
                postData.data.data.experience.experience_id = uuid.create_UUID();
                axios.post(url, postData).then(()=>{
                    console.log("5 req");
                    console.log(postData);
                    postData.data.log_id = uuid.create_UUID();
                    postData.data.log_time = "2023-09-18 18:05:25.000012";
                    postData.data.ssid = uuid.create_UUID();
                    postData.data.meta_data = "true";
                    postData.data.event_name = "Experience Start";
                    postData.data.data.experience.scene_id = uuid.create_UUID();
                    postData.data.data.experience.move_id = uuid.create_UUID();
                    postData.data.data.experience.music_id = uuid.create_UUID();
                    postData.data.data.experience.is_public = "true";
                    postData.data.data.experience.is_shared = "true";
                    postData.data.data.experience.is_creation = "false";
                    postData.data.data.experience.creator_info = uuid.create_UUID();
                    axios.post(url, postData).then(()=>{
                        console.log("6 req");
                        console.log(postData);
                        postData.data.log_id = uuid.create_UUID();
                        postData.data.log_time = "2023-09-18 18:05:30.000012";
                        postData.data.event_name = "Experience Pause";
                        axios.post(url, postData).then(()=>{
                            console.log("7 req");
                            console.log(postData);
                            postData.data.log_id = uuid.create_UUID();
                            postData.data.log_time = "2023-09-18 18:05:35.000012";
                            postData.data.event_name = "Experience Resume";
                            axios.post(url, postData).then(()=>{
                                console.log("8 req");
                                console.log(postData);
                                postData.data.log_id = uuid.create_UUID();
                                postData.data.log_time = "2023-09-18 18:05:55.000012";
                                postData.data.event_name = "Experience End";
                                postData.data.data.swipe = "up";
                                axios.post(url, postData).then(()=>{
                                    console.log("9 req");
                                    console.log(postData);
                                    postData.data.log_id = uuid.create_UUID();
                                    postData.data.log_time = "2023-09-18 18:06:05.000012";
                                    postData.data.ssid = uuid.create_UUID();
                                    postData.data.event_type = "CTA";
                                    postData.data.event_name = "Resize/Relocate Experience";
                                    axios.post(url, postData).then(()=>{
                                        console.log("10 req");
                                        console.log(postData);
                                        postData.data.log_id = uuid.create_UUID();
                                        postData.data.log_time = "2023-09-18 18:06:10.000012";
                                        postData.data.ssid = uuid.create_UUID();
                                        postData.data.event_type = "CTA";
                                        postData.data.event_name = "Help for Resize/Relocate";
                                        axios.post(url, postData).then(()=>{
                                            console.log("11 req");
                                            console.log(postData);
                                            postData.data.log_id = uuid.create_UUID();
                                            postData.data.log_time = "2023-09-18 18:06:15.000012";
                                            postData.data.ssid = uuid.create_UUID();
                                            postData.data.event_type = "CTA";
                                            postData.data.event_name = "Confirm Resize/Relocate";
                                            postData.data.meta_data = "300 x 500";
                                            axios.post(url, postData).then(()=>{
                                                console.log("12 req");
                                                console.log(postData);
                                                postData.data.log_id = uuid.create_UUID();
                                                postData.data.log_time = "2023-09-18 18:06:20.000012";
                                                postData.data.ssid = uuid.create_UUID();
                                                postData.data.event_type = "CTA";
                                                //postData.data.user_details.guest_user_profile_id = postData.data.user_profile_id;
                                                //postData.data.user_profile_id = "b7a66a11-6ea2-4df1-a2c8-8f23ad5d4902";
                                                //postData.data.user_details.is_guest = "false";
                                                postData.data.data.experience.experience_id = uuid.create_UUID();
                                                postData.data.event_name = "Experience Liked";
                                                postData.data.meta_data = "false";
                                                axios.post(url, postData).then(()=>{
                                                    console.log("13 req");
                                                    console.log(postData);
                                                    postData.data.log_id = uuid.create_UUID();
                                                    postData.data.log_time = "2023-09-18 18:06:30.000012";
                                                    postData.data.ssid = uuid.create_UUID();
                                                    postData.data.event_type = "CTA";
                                                    postData.data.event_name = "Experience Unliked";
                                                    axios.post(url, postData).then(()=>{
                                                        console.log("14 req");
                                                        console.log(postData);
                                                        postData.data.log_id = uuid.create_UUID();
                                                        postData.data.log_time = "2023-09-18 18:06:40.000012";
                                                        postData.data.ssid = uuid.create_UUID();
                                                        postData.data.event_type = "CTA";
                                                        postData.data.event_name = "View Profile";
                                                        axios.post(url, postData).then(()=>{
                                                            console.log("15 req");
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
                })
            })
        })
    })
})
.catch(function (error) {
    console.log(error.data);
})