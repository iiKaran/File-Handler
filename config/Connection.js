const mongoose = require("mongoose");

exports.connect = () => {
 mongoose.connect(process.env.DB_URL, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
 })
 .then(console.log("DB Connection Successful"))
 .catch(  (error) => {
     console.log("DB Connection Issues");
     console.error(error);
     process.exit(1);
 } );
};