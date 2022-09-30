const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
const dotenv = require("dotenv");
// dotenv.config();

app.use(express.json());

const downloadRoute = require("./routes/download.js");
const contactRoute = require("./routes/contact");

app.use("/file", downloadRoute);
app.use("/user", contactRoute);

app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("server is running " + PORT);
});
