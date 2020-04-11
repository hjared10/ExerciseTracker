const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_94kj8xbs:r0qt08ir6sq7vikk20vo6a52ik@ds141704.mlab.com:41704/heroku_94kj8xbs", {
  useNewUrlParser: true,
  useFindAndModify: false
});

require("./public/ApiRoutes")(app);
require("./public/routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});