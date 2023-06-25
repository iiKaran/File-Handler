const express = require("express"); 
const app = express(); 

// setting middle wares 
app.use(express.json()); 
require("dotenv").config();

const fileUpload = require("express-fileupload"); 
// middleware to help in uploading the file on server
app.use(fileUpload({
     useTempFiles : true,
    tempFileDir : '/tmp/'
}))

// getting the port 
const PORT = process.env.PORT|| 4000 ; 
// mounting the routes

const upload = require("./routes/FileUpload"); 
app.use("/api/upload",upload);
// connecting to the db
const db = require("./config/Connection"); 
db.connect(); 

// configuring the cloudinary

const cd = require("./config/CloudniaryConnection"); 
cd.ConfigCloudinary();
// starting the server

app.listen(PORT,()=>{
 console.log("Server Started Succesfully "); 
})