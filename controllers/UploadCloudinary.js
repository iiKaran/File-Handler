const cloudinary = require("cloudinary").v2; 

const File = require("../models/File")
const uploadAtCloud = async ( file , folder , quality)=>{
    
     try{
        const options = {folder}; 
        options.resource_type = "auto"; 
        if(quality){
         options.quality= quality ; 

        }
        return await cloudinary.uploader.upload(file.tempFilePath, options);
     }
     catch(err){
      console.log("error occur while uplaoding")
      console.log(err)
     }

}
function checkValid( type, supportedType){
 return supportedType.includes(type); 
}



exports.UploadImage = async (req , res)=>{
    try{
        const {name, email , tags} = req.body; 
        const file = req.files.file;
        
        const st = ["jpeg","jpg","png","txt","js"]; 
        const type = file.name.split(".")[1]; 
        if(!checkValid(type, st)){
           res.status(400).json({
            success:false,
            message:"file type not supported"
           })
        }
        const response = await uploadAtCloud(file,"KaranSample");
        const stored = await File.create({
         name, 
         tags ,
         url:response.secure_url, 
         email
        })
        res.status(200).json({
          success:true, 
          message:"Uploaded Successfully", 
          url:response.secure_url         
        })        
    }
    catch(err){
     console.log("err", err); 
     res.status(500).json({
      success: false , 
      message: "something went wrong"
     })
    }
}

exports.UploadVideo = async (req , res)=>{
 try{
  const {name, email , tags} = req.body; 
  const file = req.files.file;
  
  const st = ["mp4","move"]; 
  const type = file.name.split(".")[1]; 
  if(!checkValid(type, st)){
     res.status(400).json({
      success:false,
      message:"file type not supported"
     })
  }
  const response = await uploadAtCloud(file,"KaranSample");
  const stored = await File.create({
   name, 
   tags , 
   email , 
   url:response.secure_url
  })
  res.status(200).json({
    success:true, 
    message:"Uploaded Successfully", 
    url:response.secure_url         
  })        
}
catch(err){
console.log("err", err); 
res.status(500).json({
success: false , 
message: "something went wrong"
})
}
}

exports.UploadReduced = async (req , res)=>{
 try{
  const {name, email , tags} = req.body; 
  const file = req.files.file;
  
  const st = ["jpeg","jpg","png","txt","js"]; 
  const type = file.name.split(".")[1]; 
  if(!checkValid(type, st)){
     res.status(400).json({
      success:false,
      message:"file type not supported"
     })
  }
  const response = await uploadAtCloud(file,"KaranSample",30);
  const stored = await File.create({
   name, 
   tags , 
   email , 
   url:response.secure_url
  })
  res.status(200).json({
    success:true, 
    message:"Uploaded Successfully", 
    url:response.secure_url         
  })        
}
catch(err){
console.log("err", err); 
res.status(500).json({
success: false , 
message: "something went wrong"
})
}
}
