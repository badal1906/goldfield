const router = require("express").Router();
const fs = require("fs");

const brochurePath = __dirname + "/GoldfieldsBROCHURE.pdf";

router.get("/download", downloadFile);

async function downloadFile(req, res) {
  try {
    console.log("s");
    let data = fs.readFileSync(brochurePath, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
      }
    });
    res.send(data);
  } catch (err) {
    console.log(err);
  }
}

module.exports = router;
