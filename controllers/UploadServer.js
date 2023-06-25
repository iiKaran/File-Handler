const File = require("../models/File"); 
exports.UploadAtServer= async(req,res)=>{
    try{
     
     // fetching the details sended along with file 
     const { name , email , tags} = req.body; 
     const inputFile = req.files.file; 
     const path = __dirname + "/files/"+ Date.now()+ `.${inputFile.name.split(".")[1]}`; 
     inputFile.mv(path,(err)=>{
      console.log(err)
     })
     res.status(200).json({
      success:true,
      message: "Saved in the files folder", 
     })
    }
    catch(err){
       console.log("error occur while uploading at server");
       console.log(err)
       res.status(500).json({
        success: false , 
        message: " error occur while saving at the server"
       })
    }
}