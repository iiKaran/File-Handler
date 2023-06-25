const mongoose = require("mongoose");
const nodemailer = require("nodemailer")

const FileSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true
 },
 tags: {
  type: String,
  required: true
 },
 email: {
  type: String,
  required: true
 },
 url:{
  type:String
 }
})

FileSchema.post("save", async function(doc) {
 try{
     // console.log("DOC",doc)

     //transporter 
     //TODO: shift this configuration under /config folder
     let transporter = nodemailer.createTransport({
      service: 'gmail',
         auth:{
             user:process.env.MAIL_USER,
             pass:process.env.MAIL_PASS,
         },
     });

     //send mail 
     let info = await transporter.sendMail({
         from:`karankumar560k@gmail.com`,
         to:doc.email,
         subject: "New File Uploaded on Cloudinary",
         html:`<h2>Hello Jee</h2> <p>File Uploaded View here: <a href="${doc.imageUrl}">${doc.url}</a> </p>`,
     })
     
     console.log("INFO", info);


 }
 catch(error) {
     console.error(error);
 }
})

module.exports = mongoose.model("File",FileSchema);