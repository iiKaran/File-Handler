const cloudinary = require("cloudinary").v2 ; 
require("dotenv").config();

exports.ConfigCloudinary=()=>{
try{
 cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, 
  api_key:process.env.API_KEY, 
  api_secret:process.env.API_SECRET, 
  // config is necessary before saving and these details  are taken from the dashboard of the cloudinary
 })
}
catch(err){
  console.log("error occur while configuring cloudinary")
}
}