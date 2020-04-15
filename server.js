const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// const MONGODB_URI = "mongodb://heroku_94kj8xbs:r0qt08ir6sq7vikk20vo6a52ik@ds141704.mlab.com:41704/heroku_94kj8xbs";
// //mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_94kj8xbs:r0qt08ir6sq7vikk20vo6a52ik@ds141704.mlab.com:41704/heroku_94kj8xbs", {
//   mongoose.connect(MONGODB_URI, {
   
// useNewUrlParser: true,
//   useFindAndModify: false
// });
const mongoURI = "mongodb://heroku_94kj8xbs:r0qt08ir6sq7vikk20vo6a52ik@ds141704.mlab.com:41704/heroku_94kj8xbs";
mongoose.connect(
  mongoURI,{
    useMongoClient:true
  });

require("./routes/ApiRoutes")(app);
require("./routes/routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});