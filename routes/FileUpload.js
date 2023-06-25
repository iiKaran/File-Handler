const express = require("express");

const router = express.Router(); 
const {UploadAtServer}= require("../controllers/UploadServer"); 
const{UploadImage}= require("../controllers/UploadCloudinary");
const{UploadVideo}= require("../controllers/UploadCloudinary");
const{UploadReduced}= require("../controllers/UploadCloudinary");
router.get("/check",(req,res)=>{
 res.status(200).json({
  success:true, 
  message:"done ok aa ",
  response: " chak de fte"
 })
})
router.post("/server",UploadAtServer);
router.post("/cloudImage",UploadImage);  
router.post("/cloudVideo",UploadVideo);
router.post("/cloudReduced",UploadReduced);  
module.exports= router ;