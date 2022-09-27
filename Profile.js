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
postData.data.log_time = "2023-06-20 17:30:30.000012";
postData.data.user_details.avatar_url = "";
postData.data.meta_data = create_UUID();
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
postData.data.adjust_event_id = "";
postData.data.data.experience.is_creation = "false";
postData.data.event_id = "eventid";
postData.data.event_category = "Profile";
postData.data.event_type = "Page View Event";
postData.data.event_name = "Profile Page";
postData.data.data.social_media_platform = "Facebook";
postData.data.data.refer.marketing_channel = "Facebook";
postData.data.event_description = "";
postData.data.app_version = "0.1.1";
axios.post(url, postData).then(function (response) {
    console.log("1 req");
    console.log(postData);
    postData.data.log_id = create_UUID();
    postData.data.log_time = "2023-06-20 17:30:55.004305";
    postData.data.ssid = create_UUID();
    postData.data.meta_data = "false"
    postData.data.user_details.avatar_url = "www.youtube.com";
    postData.data.event_type = "CTA";
    postData.data.event_name = "View Avatar";
    axios.post(url, postData).then(()=>{
        console.log("2 req");
        console.log(postData);
        postData.data.log_id = create_UUID();
        postData.data.log_time = "2023-06-20 17:31:05.004305";
        postData.data.ssid = create_UUID();
        postData.data.event_name = "View Experience";
        postData.data.data.experience.experience_id = "ksdjh789-4rf5-4df1-o9i0-8f23ad5d4902";
        postData.data.data.experience.creator_info = "op9ik789-897y-1fde-90a7-8f23ad5d4902";
        axios.post(url, postData).then(()=> {
            console.log("3 req");
            console.log(postData);
            postData.data.log_id = create_UUID();
            postData.data.log_time = "2023-06-20 17:31:15.004305";
            postData.data.ssid = create_UUID();
            postData.data.event_name = "Change Avatar";
            axios.post(url, postData).then(() =>{
                console.log("4 req");
                console.log(postData);
                postData.data.log_id = create_UUID();
                postData.data.log_time = "2023-06-20 17:31:25.004305";
                postData.data.ssid = create_UUID();
                postData.data.event_name = "Avatar Changed";
                axios.post(url, postData).then(function (response) {
                    console.log("5 req");
                    console.log(postData);
                    postData.data.log_id = create_UUID();
                    postData.data.log_time = "2023-06-20 17:31:35.004305";
                    postData.data.ssid = create_UUID();
                    postData.data.event_name = "Profile Settings";
                    axios.post(url, postData).then(()=> {
                        console.log("6 req");
                        console.log(postData);
                        postData.data.log_id = create_UUID();
                        postData.data.log_time = "2023-06-20 17:31:45.004305";
                        postData.data.ssid = create_UUID();
                        postData.data.meta_data = "true";
                        postData.data.event_type = "Page View Event";
                        postData.data.event_name = "View Profile Settings";
                        axios.post(url, postData).then(()=> {
                            console.log("7 req");
                            console.log(postData);
                            postData.data.log_id = create_UUID();
                            postData.data.log_time = "2023-06-20 17:31:46.004305";
                            postData.data.ssid = create_UUID();
                            postData.data.event_type = "CTA";
                            postData.data.event_name = "Change Username";
                            axios.post(url, postData).then(()=> {
                                console.log("8 req");
                                console.log(postData);
                                postData.data.log_id = create_UUID();
                                postData.data.log_time = "2023-06-20 17:32:05.004305";
                                postData.data.ssid = create_UUID();
                                postData.data.event_type = "Page View Event";
                                postData.data.event_name = "Username Updation";
                                axios.post(url, postData).then(()=> {
                                    console.log("9 req");
                                    console.log(postData);
                                    postData.data.log_id = create_UUID();
                                    postData.data.log_time = "2023-06-20 17:32:15.004305";
                                    postData.data.ssid = create_UUID();
                                    postData.data.event_type = "CTA";
                                    postData.data.event_name = "Confirm Username Updation";
                                    axios.post(url, postData).then(()=> {
                                        console.log("10 req");
                                        console.log(postData);
                                        postData.data.log_id = create_UUID();
                                        postData.data.log_time = "2023-06-20 17:32:25.004305";
                                        postData.data.ssid = create_UUID();
                                        postData.data.event_type = "CTA";
                                        postData.data.event_name = "Change Name";
                                        axios.post(url, postData).then(()=> {
                                            console.log("11 req");
                                            console.log(postData);
                                            postData.data.log_id = create_UUID();
                                            postData.data.log_time = "2023-06-20 17:32:35.004305";
                                            postData.data.ssid = create_UUID();
                                            postData.data.event_type = "Page View Event";
                                            postData.data.event_name = "Name Updation";
                                            axios.post(url, postData).then(()=> {
                                                console.log("12 req");
                                                console.log(postData);
                                                postData.data.log_id = create_UUID();
                                                postData.data.log_time = "2023-06-20 17:32:45.004305";
                                                postData.data.ssid = create_UUID();
                                                postData.data.event_type = "CTA";
                                                postData.data.event_name = "Confirm Name Updation";
                                                axios.post(url, postData).then(()=> {
                                                    console.log("13 req");
                                                    console.log(postData);
                                                    postData.data.log_id = create_UUID();
                                                    postData.data.log_time = "2023-06-20 17:32:55.004305";
                                                    postData.data.ssid = create_UUID();
                                                    postData.data.event_name = "Logout";
                                                    // axios.post(url, postData).then(()=> {
                                                    //     console.log("14 req");
                                                    //     console.log(postData);
                                                    //     postData.data.log_id = create_UUID();
                                                    //     postData.data.log_time = "2023-06-20 17:33:05.004305";
                                                    //     postData.data.ssid = create_UUID();
                                                    //     postData.data.event_name = "Create Experience";
                                                    //     axios.post(url, postData).then(()=> {
                                                    //         console.log("15 req");
                                                    //         console.log(postData);
                                                    //     })
                                                    // })
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