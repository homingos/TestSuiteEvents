const axios = require('axios');
const JsonData = require("./DummyData");
const uuid = require('./GetUUID.js');
const timeinc = require('./TimeIncrementer.js');

var sendOnBoardingEvent = function(event_url, user_id, guest_user_profile_id, log_time){
var postData= {data:JSON.parse(JsonData.empty)}

postData.data.log_id = uuid.create_UUID();
postData.data.device_id = uuid.create_UUID();
postData.data.user_profile_id = user_id;
postData.data.country = "IN";
postData.data.ip = "168.212.226.204";
postData.data.log_time = log_time;
postData.data.user_details.avatar_url = "";
//postData.data.user_details.avatar_event_url = "www.youtube.com";
postData.data.user_details.guest_user_profile_id = guest_user_profile_id;
postData.data.user_details.is_guest = "true";
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
postData.data.event_category = "Onboarding";
postData.data.event_type = "Page View Event";
postData.data.event_name = "New Device";
postData.data.data.social_media_platform = "Facebook";
postData.data.data.refer.marketing_channel = "Facebook";
postData.data.event_description = "";
postData.data.app_version = "0.1.1";
axios.post(event_url, postData).then(function (response) {
    console.log("1st req");
    console.log(postData);
    postData.data.log_id = uuid.create_UUID();
    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
    postData.data.ssid = uuid.create_UUID();
    postData.data.event_name = "Onboarding Details";
    axios.post(event_url, postData).then(()=>{
        console.log("2nd req");
        console.log(postData);
        postData.data.log_id = uuid.create_UUID();
        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
        postData.data.ssid = uuid.create_UUID();
        postData.data.event_name = "Request Camera Permission";
        axios.post(event_url, postData).then(()=>{
            console.log("3rd req");
            console.log(postData);
            postData.data.log_id = uuid.create_UUID();
            postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
            postData.data.ssid = uuid.create_UUID();
            postData.data.event_type = "CTA";
            postData.data.event_name = "Camera Permission - Granted/Denied";
            axios.post(event_url, postData).then(()=>{
                console.log("4rth req");
                console.log(postData);
                postData.data.log_id = uuid.create_UUID();
                postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                postData.data.ssid = uuid.create_UUID();
                postData.data.event_type = "Page View Event";
                postData.data.event_name = "Request Gallery Permission";
                axios.post(event_url, postData).then(()=>{
                    console.log("5th req");
                    console.log(postData);
                    postData.data.log_id = uuid.create_UUID();
                    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                    postData.data.ssid = uuid.create_UUID();
                    postData.data.event_type = "CTA";
                    postData.data.event_name = "Gallery Permission - Granted/Denied";
                    axios.post(event_url, postData).then(()=>{
                        console.log("6th req");
                        console.log(postData);
                        postData.data.log_id = uuid.create_UUID();
                        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                        postData.data.ssid = uuid.create_UUID();
                        postData.data.event_type = "Page View Event";
                        postData.data.event_name = "Request Notifications Permission";
                        axios.post(event_url, postData).then(()=>{
                            console.log("7th req");
                            console.log(postData);
                            postData.data.log_id = uuid.create_UUID();
                            postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                            postData.data.ssid = uuid.create_UUID();
                            postData.data.event_type = "CTA";
                            postData.data.event_name = "Notifications Permission - Granted/Denied";
                            axios.post(event_url, postData).then(()=>{
                                console.log("8th req");
                                console.log(postData);
                                postData.data.log_id = uuid.create_UUID();
                                postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                postData.data.ssid = uuid.create_UUID();
                                postData.data.event_type = "Page View Event";
                                postData.data.event_name = "Social Login";
                                axios.post(event_url, postData).then(()=>{
                                    console.log("9th req");
                                    console.log(postData);
                                    postData.data.log_id = uuid.create_UUID();
                                    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                    postData.data.ssid = uuid.create_UUID();
                                    postData.data.event_type = "CTA";
                                    postData.data.event_name = "Social Media Platform Selection";
                                    axios.post(event_url, postData).then(()=>{
                                        console.log("10 req");
                                        console.log(postData);
                                        postData.data.log_id = uuid.create_UUID();
                                        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                        postData.data.ssid = uuid.create_UUID();
                                        postData.data.user_details.guest_user_profile_id = postData.data.user_profile_id;
                                        postData.data.user_profile_id = "b7a66a11-6ea2-4df1-a2c8-8f23ad5d4902";                                        
                                        postData.data.user_details.is_guest = "false";
                                        postData.data.event_type = "Page View Event";
                                        postData.data.event_name = "Login Successful";
                                        axios.post(event_url, postData).then(()=>{
                                            console.log("11 req");
                                            console.log(postData);
                                            postData.data.log_id = uuid.create_UUID();
                                            postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                            postData.data.ssid = uuid.create_UUID();
                                            postData.data.event_name = "Signup Successful";
                                            axios.post(event_url, postData).then(()=>{
                                                console.log("12 req");
                                                console.log(postData);
                                                postData.data.log_id = uuid.create_UUID();
                                                postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                postData.data.ssid = uuid.create_UUID();
                                                postData.data.meta_data = "true";
                                                postData.data.event_name = "Request for Avatar Creation";
                                                axios.post(event_url, postData).then(()=>{
                                                    console.log("13 req");
                                                    console.log(postData);
                                                    postData.data.log_id = uuid.create_UUID();
                                                    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                    postData.data.ssid = uuid.create_UUID();
                                                    postData.data.event_type = "CTA";
                                                    postData.data.event_name = "Create Avatar"; 
                                                    axios.post(event_url, postData).then(()=>{
                                                        console.log("14 req");
                                                        console.log(postData);
                                                        postData.data.log_id = uuid.create_UUID();
                                                        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                        postData.data.ssid = uuid.create_UUID();
                                                        postData.data.event_name = "Skip Avatar Creation";
                                                        axios.post(event_url, postData).then(()=>{
                                                            console.log("15 req");
                                                            console.log(postData);
                                                            postData.data.log_id = uuid.create_UUID();
                                                            postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                            postData.data.ssid = uuid.create_UUID();
                                                            postData.data.event_type = "Page View Event";
                                                            postData.data.event_name = "Avatar Created";    
                                                            postData.data.user_details.avatar_event_url = "www.youtube.com";
                                                            axios.post(event_url, postData).then(()=>{
                                                                console.log("16 req");
                                                                console.log(postData);
                                                                postData.data.log_id = uuid.create_UUID();
                                                                postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                                postData.data.ssid = uuid.create_UUID();
                                                                postData.data.event_type = "Page View Event";
                                                                postData.data.event_name = "Username Creation"; 
                                                                axios.post(event_url, postData).then(()=>{
                                                                    console.log("17 req");
                                                                    console.log(postData);
                                                                    postData.data.log_id = uuid.create_UUID();
                                                                    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                                    postData.data.ssid = uuid.create_UUID();
                                                                    postData.data.event_type = "CTA";
                                                                    postData.data.event_name = "Confirm Username";       
                                                                    axios.post(event_url, postData).then(()=>{
                                                                        console.log("18 req");
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
    })
})
})
.catch(function (error) {
    console.log(error.data);
})
}

module.exports = {sendOnBoardingEvent}