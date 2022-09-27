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
postData.data.user_profile_id = "b7a66a11-6ea2-4df1-a2c8-8f23ad5d4902";
postData.data.country = "IND";
postData.data.ip = "168.212.226.204";
postData.data.log_time = "2023-06-20 16:40:55.000000";
postData.data.user_details.avatar_url = "www.youtube.com";
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
postData.data.event_id = "eventid";
postData.data.event_category = "Creation";
postData.data.event_type = "Page View Event";
postData.data.event_name = "Create An Experience";
postData.data.data.refer.marketing_channel = "Facebook";
postData.data.data.social_media_platform = "Facebook";
postData.data.event_description = "Back Camera";
postData.data.app_version = "0.1.1";
axios.post(url, postData)
  .then(function (response) {
    console.log("1st req");
    console.log(postData);
    postData.data.log_time = "2023-06-20 16:41:05.000786";
    postData.data.ssid = create_UUID();
    postData.data.log_id = create_UUID();
    postData.data.event_name = "Error (No Person Detected / Full Body Required)";
    axios.post(url, postData).then(()=>{
    console.log("2nd req");
    console.log(postData);
    postData.data.log_time = "2023-06-20 16:41:10.000786";
    postData.data.ssid = create_UUID();
    postData.data.log_id = create_UUID();
      postData.data.event_type = "CTA";
      postData.data.event_name = "Flip Camera";
      postData.data.event_description = "Front Camera";
      axios.post(url, postData).then(()=>{
        console.log("3rd req");
        console.log(postData);
        postData.data.log_time = "2023-06-20 16:41:15.000786";
        postData.data.log_id = create_UUID();
        postData.data.ssid = create_UUID();
        postData.data.event_name = "Record Start";
        axios.post(url, postData).then(()=>{
          console.log("4rth req");
          console.log(postData);
         postData.data.log_time = "2023-06-20 16:44:25.000786";
          postData.data.log_id = create_UUID();
          postData.data.event_name = "Record Stop";
          axios.post(url, postData).then(()=>{
            console.log("5th req");
            console.log(postData);
              postData.data.log_time = "2023-06-20 16:44:35.000786";
              postData.data.log_id = create_UUID();
              postData.data.ssid = create_UUID();
              postData.data.event_type = "Page View Event";
              postData.data.event_name = "Video Recorded";
              postData.data.event_description = "";
              axios.post(url, postData).then(()=>{
              console.log("6th req");
              console.log(postData);
                postData.data.log_time = "2023-06-20 16:44:45.000786";
                postData.data.log_id = create_UUID();
                postData.data.ssid = create_UUID();
                postData.data.user_details.avatar_url = "www.newavatar.com";                
                postData.data.event_name = "Avatar Rendered";
                postData.data.data.experience.move_id = create_UUID();
                const moveID = postData.data.data.experience.move_id;
                axios.post(url, postData).then(()=>{
                console.log("7th req");
                console.log(postData);
                postData.data.log_time = "2023-06-20 16:44:55.000786";
                  postData.data.log_id = create_UUID();
                  postData.data.ssid = create_UUID();
                  postData.data.event_type = "CTA";
                  postData.data.event_name = "AR Background";
                  axios.post(url, postData).then(()=>{
                    console.log("8th req");
                    console.log(postData);
                      postData.data.log_time = "2023-06-20 16:44:05.000786";
                      postData.data.log_id = create_UUID();
                      postData.data.ssid = create_UUID();
                      postData.data.event_name = "Studio Background";
                      axios.post(url, postData).then(()=>{
                        console.log("9th req");
                        console.log(postData);
                        postData.data.log_time = "2023-06-20 16:44:15.000786";
                          postData.data.log_id = create_UUID();
                          postData.data.ssid = create_UUID();
                          postData.data.user_details.avatar_url = "www.changedavatar.com";
                          postData.data.event_name = "Change Avatar";
                          axios.post(url, postData).then(()=>{
                            console.log("10th req");
                            console.log(postData);
                            postData.data.log_time = "2023-06-20 16:44:20.000786";
                            postData.data.log_id = create_UUID();
                            postData.data.ssid = create_UUID();
                            postData.data.event_name = "Music Options";
                            axios.post(url, postData).then(()=>{
                              console.log("11th req");
                              console.log(postData);
                              postData.data.log_time = "2023-06-20 16:44:25.000786";
                              postData.data.log_id = create_UUID();
                              postData.data.ssid = create_UUID();
                              postData.data.event_type = "Page View Event";
                              axios.post(url, postData).then(()=>{
                                console.log("12th req");
                                console.log(postData);
                                postData.data.log_time = "2023-06-20 16:44:35.000786";
                                postData.data.log_id = create_UUID();
                                postData.data.ssid = create_UUID();
                                postData.data.event_type = "CTA";
                                postData.data.event_name = "Select Music";
                                axios.post(url, postData).then(()=>{
                                  console.log("13th req");
                                  console.log(postData);
                                  postData.data.log_time = "2023-06-20 16:44:45.000786";
                                  postData.data.log_id = create_UUID();
                                  postData.data.ssid = create_UUID();
                                  postData.data.event_name = "Moves Options";
                                  postData.data.data.experience.move_id = "";
                                  postData.data.data.experience.music_id = create_UUID();
                                  axios.post(url, postData).then(()=>{
                                    console.log("14th req");
                                    console.log(postData);
                                    postData.data.log_time = "2023-06-20 16:44:55.000786";
                                    postData.data.log_id = create_UUID();
                                    postData.data.ssid = create_UUID();
                                    postData.data.event_type = "Page View Event";
                                    axios.post(url, postData).then(()=>{
                                      console.log("15th req");
                                      console.log(postData);
                                      postData.data.log_time = "2023-06-20 16:45:05.000786";
                                      postData.data.log_id = create_UUID();
                                      postData.data.ssid = create_UUID();
                                      postData.data.event_type = "CTA";
                                      postData.data.event_name = "Select Move";
                                      postData.data.meta_data = "true";
                                      axios.post(url, postData).then(()=>{
                                        console.log("16th req");
                                        console.log(postData);
                                        postData.data.log_time = "2023-06-20 16:45:15.000786";
                                        postData.data.log_id = create_UUID();
                                        postData.data.ssid = create_UUID();
                                        postData.data.event_type = "Page View Event";
                                        postData.data.event_name = "Warning - Remove Recorded Moves";
                                        postData.data.data.experience.move_id = moveID;
                                        axios.post(url, postData).then(()=>{
                                          console.log("17th req");
                                          console.log(postData);
                                          postData.data.log_time = "2023-06-20 16:45:25.000786";
                                          postData.data.log_id = create_UUID();
                                          postData.data.ssid = create_UUID();
                                          postData.data.event_type = "CTA";
                                          postData.data.event_name = "Yes - Remove Recorded Moves";
                                          axios.post(url, postData).then(()=>{
                                            console.log("18th req");
                                            console.log(postData);
                                            postData.data.log_time = "2023-06-20 16:45:35.000786";
                                            postData.data.log_id = create_UUID();
                                            postData.data.ssid = create_UUID();
                                            postData.data.event_name = "No - Remove Recorded Moves";
                                            axios.post(url, postData).then(()=>{
                                              console.log("19th req");
                                              console.log(postData);
                                              postData.data.log_time = "2023-06-20 16:45:40.000786";
                                              postData.data.log_id = create_UUID();
                                              postData.data.ssid = create_UUID();                                              
                                              postData.data.event_name = "Scene Options";
                                              axios.post(url, postData).then(()=>{
                                                console.log("20th req");
                                                console.log(postData);
                                                postData.data.log_time = "2023-06-20 16:45:45.000786";
                                                postData.data.log_id = create_UUID();
                                                postData.data.ssid = create_UUID();
                                                postData.data.event_type = "Page View Event";
                                                axios.post(url, postData).then(()=>{
                                                  console.log("21st req");
                                                  console.log(postData);
                                                  postData.data.log_time = "2023-06-20 16:45:50.000786";
                                                  postData.data.log_id = create_UUID();
                                                  postData.data.ssid = create_UUID();
                                                  postData.data.event_type = "CTA";
                                                  postData.data.event_name = "Select Scene";
                                                  axios.post(url, postData).then(()=>{
                                                    console.log("22nd req");
                                                    console.log(postData);
                                                    postData.data.log_time = "2023-06-20 16:45:55.000786";
                                                    postData.data.log_id = create_UUID();
                                                    postData.data.ssid = create_UUID();
                                                    postData.data.event_name = "Camera Mode";
                                                    postData.data.data.experience.scene_id = create_UUID();
                                                    axios.post(url, postData).then(()=>{
                                                      console.log("23rd req");
                                                      console.log(postData);
                                                      postData.data.log_time = "2023-06-20 16:46:15.000786";
                                                      postData.data.log_id = create_UUID();
                                                      postData.data.ssid = create_UUID();
                                                      postData.data.event_name = "Finalize Creation";                                                      
                                                      axios.post(url, postData).then(()=>{
                                                        console.log("24th req");
                                                        console.log(postData);
                                                        postData.data.log_time = "2023-06-20 16:46:00.000786";
                                                        postData.data.log_id = create_UUID();
                                                        //postData.data.user_details.guest_user_profile_id = postData.data.user_profile_id;
                                                        //postData.data.user_profile_id = "b7a66a11-6ea2-4df1-a2c8-8f23ad5d4902";
                                                        //postData.data.user_details.is_guest = "false";
                                                        postData.data.ssid = create_UUID();
                                                        postData.data.event_type = "Page View Event";
                                                        postData.data.event_name = "Finalized Creation";
                                                        postData.data.data.experience.experience_id = create_UUID();
                                                        postData.data.data.experience.is_creation = "true";
                                                        postData.data.data.experience.creator_info = create_UUID();
                                                        axios.post(url, postData).then(()=>{
                                                          console.log("25th req");
                                                          console.log(postData);
                                                          postData.data.log_time = "2023-06-20 16:46:10.000786";
                                                          postData.data.log_id = create_UUID();
                                                          postData.data.ssid = create_UUID();
                                                          postData.data.event_type = "CTA";
                                                          postData.data.event_name = "Finalize Experience";
                                                          axios.post(url, postData).then(()=>{
                                                            console.log("26th req");
                                                            console.log(postData);
                                                            postData.data.log_time = "2023-06-20 16:46:20.000786";
                                                            postData.data.log_id = create_UUID();
                                                            postData.data.ssid = create_UUID();
                                                            postData.data.event_type = "Page View Event";
                                                            postData.data.event_name = "Finalized Experience";
                                                            axios.post(url, postData).then(()=>{
                                                              console.log("27th req");
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
  

