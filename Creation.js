const axios = require('axios');
const JsonData = require("./DummyData");
const uuid = require('./GetUUID.js');
const timeinc = require('./TimeIncrementer.js');

//uuid()

var sendCreationEvent = function(event_url, device_id, user_id, guest_user_profile_id, log_time, move_id, music_id, exp_id, scene_id){
var postData= {data:JSON.parse(JsonData.empty)}
postData.data.log_id = uuid.create_UUID();
postData.data.device_id = device_id;
postData.data.user_profile_id = user_id;
postData.data.country = "IN";
postData.data.ip = "168.212.226.204";
postData.data.log_time = log_time;
postData.data.user_details.avatar_url = "www.youtube.com";
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
postData.data.adjust_event_id = "";
postData.data.event_id = "eventid";
postData.data.event_category = "Creation";
postData.data.event_type = "Page View Event";
postData.data.event_name = "Create An Experience";
postData.data.data.refer.marketing_channel = "Facebook";
postData.data.data.social_media_platform = "Facebook";
postData.data.event_description = "Back Camera";
postData.data.app_version = "0.1.1";
axios.post(event_url, postData)
  .then(function (response) {
    console.log("1st req");
    console.log(postData);
    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
    postData.data.ssid = uuid.create_UUID();
    postData.data.log_id = uuid.create_UUID();
    postData.data.event_name = "Error (No Person Detected / Full Body Required)";
    axios.post(event_url, postData).then(()=>{
    console.log("2nd req");
    console.log(postData);
    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
    postData.data.ssid = uuid.create_UUID();
    postData.data.log_id = uuid.create_UUID();
      postData.data.event_type = "CTA";
      postData.data.event_name = "Flip Camera";
      postData.data.event_description = "Front Camera";
      axios.post(event_url, postData).then(()=>{
        console.log("3rd req");
        console.log(postData);
        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
        postData.data.log_id = uuid.create_UUID();
        postData.data.ssid = uuid.create_UUID();
        postData.data.event_name = "Record Start";
        axios.post(event_url, postData).then(()=>{
          console.log("4rth req");
          console.log(postData);
          postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
          postData.data.log_id = uuid.create_UUID();
          postData.data.event_name = "Record Stop";
          axios.post(event_url, postData).then(()=>{
            console.log("5th req");
            console.log(postData);
            postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
              postData.data.log_id = uuid.create_UUID();
              postData.data.ssid = uuid.create_UUID();
              postData.data.event_type = "Page View Event";
              postData.data.event_name = "Video Recorded";
              postData.data.event_description = "";
              axios.post(event_url, postData).then(()=>{
              console.log("6th req");
              console.log(postData);
              postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                postData.data.log_id = uuid.create_UUID();
                postData.data.ssid = uuid.create_UUID();
                postData.data.user_details.avatar_event_url = "www.newavatar.com";                
                postData.data.event_name = "Avatar Rendered";
                postData.data.data.experience.move_id = move_id;
                //const moveID = postData.data.data.experience.move_id;
                axios.post(event_url, postData).then(()=>{
                console.log("7th req");
                console.log(postData);
                postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                  postData.data.log_id = uuid.create_UUID();
                  postData.data.ssid = uuid.create_UUID();
                  postData.data.event_type = "CTA";
                  postData.data.event_name = "AR Background";
                  axios.post(event_url, postData).then(()=>{
                    console.log("8th req");
                    console.log(postData);
                    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                      postData.data.log_id = uuid.create_UUID();
                      postData.data.ssid = uuid.create_UUID();
                      postData.data.event_name = "Studio Background";
                      axios.post(event_url, postData).then(()=>{
                        console.log("9th req");
                        console.log(postData);
                        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                          postData.data.log_id = uuid.create_UUID();
                          postData.data.ssid = uuid.create_UUID();
                          postData.data.user_details.avatar_event_url = "www.changedavatar.com";
                          postData.data.event_name = "Change Avatar";
                          axios.post(event_url, postData).then(()=>{
                            console.log("10th req");
                            console.log(postData);
                            postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                            postData.data.log_id = uuid.create_UUID();
                            postData.data.ssid = uuid.create_UUID();
                            postData.data.event_name = "Music Options";
                            axios.post(event_url, postData).then(()=>{
                              console.log("11th req");
                              console.log(postData);
                              postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                              postData.data.log_id = uuid.create_UUID();
                              postData.data.ssid = uuid.create_UUID();
                              postData.data.event_type = "Page View Event";
                              axios.post(event_url, postData).then(()=>{
                                console.log("12th req");
                                console.log(postData);
                                postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                postData.data.log_id = uuid.create_UUID();
                                postData.data.ssid = uuid.create_UUID();
                                postData.data.event_type = "CTA";
                                postData.data.event_name = "Select Music";
                                axios.post(event_url, postData).then(()=>{
                                  console.log("13th req");
                                  console.log(postData);
                                  postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                  postData.data.log_id = uuid.create_UUID();
                                  postData.data.ssid = uuid.create_UUID();
                                  postData.data.event_name = "Moves Options";
                                  postData.data.data.experience.move_id = move_id;
                                  postData.data.data.experience.music_id = music_id;
                                  axios.post(event_url, postData).then(()=>{
                                    console.log("14th req");
                                    console.log(postData);
                                    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                    postData.data.log_id = uuid.create_UUID();
                                    postData.data.ssid = uuid.create_UUID();
                                    postData.data.event_type = "Page View Event";
                                    axios.post(event_url, postData).then(()=>{
                                      console.log("15th req");
                                      console.log(postData);
                                      postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                      postData.data.log_id = uuid.create_UUID();
                                      postData.data.ssid = uuid.create_UUID();
                                      postData.data.event_type = "CTA";
                                      postData.data.event_name = "Select Move";
                                      postData.data.meta_data = "true";
                                      axios.post(event_url, postData).then(()=>{
                                        console.log("16th req");
                                        console.log(postData);
                                        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                        postData.data.log_id = uuid.create_UUID();
                                        postData.data.ssid = uuid.create_UUID();
                                        postData.data.event_type = "Page View Event";
                                        postData.data.event_name = "Warning - Remove Recorded Moves";
                                        postData.data.data.experience.move_id = move_id;
                                        axios.post(event_url, postData).then(()=>{
                                          console.log("17th req");
                                          console.log(postData);
                                          postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                          postData.data.log_id = uuid.create_UUID();
                                          postData.data.ssid = uuid.create_UUID();
                                          postData.data.event_type = "CTA";
                                          postData.data.event_name = "Yes - Remove Recorded Moves";
                                          axios.post(event_url, postData).then(()=>{
                                            console.log("18th req");
                                            console.log(postData);
                                            postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                            postData.data.log_id = uuid.create_UUID();
                                            postData.data.ssid = uuid.create_UUID();
                                            postData.data.event_name = "No - Remove Recorded Moves";
                                            axios.post(event_url, postData).then(()=>{
                                              console.log("19th req");
                                              console.log(postData);
                                              postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                              postData.data.log_id = uuid.create_UUID();
                                              postData.data.ssid = uuid.create_UUID();                                              
                                              postData.data.event_name = "Scene Options";
                                              axios.post(event_url, postData).then(()=>{
                                                console.log("20th req");
                                                console.log(postData);
                                                postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                postData.data.log_id = uuid.create_UUID();
                                                postData.data.ssid = uuid.create_UUID();
                                                postData.data.event_type = "Page View Event";
                                                axios.post(event_url, postData).then(()=>{
                                                  console.log("21st req");
                                                  console.log(postData);
                                                  postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                  postData.data.log_id = uuid.create_UUID();
                                                  postData.data.ssid = uuid.create_UUID();
                                                  postData.data.event_type = "CTA";
                                                  postData.data.event_name = "Select Scene";
                                                  axios.post(event_url, postData).then(()=>{
                                                    console.log("22nd req");
                                                    console.log(postData);
                                                    postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                    postData.data.log_id = uuid.create_UUID();
                                                    postData.data.ssid = uuid.create_UUID();
                                                    postData.data.event_name = "Camera Mode";
                                                    postData.data.data.experience.scene_id = scene_id;
                                                    axios.post(event_url, postData).then(()=>{
                                                      console.log("23rd req");
                                                      console.log(postData);
                                                      postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                      postData.data.log_id = uuid.create_UUID();
                                                      postData.data.ssid = uuid.create_UUID();
                                                      postData.data.event_name = "Finalize Creation";                                                      
                                                      axios.post(event_url, postData).then(()=>{
                                                        console.log("24th req");
                                                        console.log(postData);
                                                        postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                        postData.data.log_id = uuid.create_UUID();
                                                        //postData.data.user_details.guest_user_profile_id = postData.data.user_profile_id;
                                                        //postData.data.user_profile_id = "b7a66a11-6ea2-4df1-a2c8-8f23ad5d4902";
                                                        //postData.data.user_details.is_guest = "false";
                                                        postData.data.ssid = uuid.create_UUID();
                                                        postData.data.event_type = "Page View Event";
                                                        postData.data.event_name = "Finalized Creation";
                                                        postData.data.data.experience.experience_id = exp_id;
                                                        postData.data.data.experience.is_creation = "true";
                                                        postData.data.data.experience.creator_info = uuid.create_UUID();
                                                        axios.post(event_url, postData).then(()=>{
                                                          console.log("25th req");
                                                          console.log(postData);
                                                          postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                          postData.data.log_id = uuid.create_UUID();
                                                          postData.data.ssid = uuid.create_UUID();
                                                          postData.data.event_type = "CTA";
                                                          postData.data.event_name = "Finalize Experience";
                                                          axios.post(event_url, postData).then(()=>{
                                                            console.log("26th req");
                                                            console.log(postData);
                                                            postData.data.log_time = timeinc.IncreaseTime(postData.data.log_time);
                                                            postData.data.log_id = uuid.create_UUID();
                                                            postData.data.ssid = uuid.create_UUID();
                                                            postData.data.event_type = "Page View Event";
                                                            postData.data.event_name = "Finalized Experience";
                                                            axios.post(event_url, postData).then(()=>{
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
}

module.exports = {sendCreationEvent}

