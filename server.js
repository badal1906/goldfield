const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");
const dotenv = require("dotenv");
// dotenv.config();

app.use(express.json());

const downloadRoute = require("./routes/download.js");
const contactRoute = require("./routes/contact");

app.use("/file", downloadRoute);
app.use("/user", contactRoute);

app.listen(port, () => {
  console.log("server is running " + port);
});
