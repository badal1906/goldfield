const nodemailer = require("nodemailer");

const router = require("express").Router();

router.post("/book", sendInviteLink);
router.post("/contact", sendContactInfo);

async function handleSendInvite(email, name, num, desc) {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  let info = await transporter.sendMail({
    to: process.env.user,
    from: email,
    subject: `${
      desc ? "Book Now message from client" : "A new download from client = "
    } `,
    text: ` ${
      desc ? "Book Now message from client" : "Brochure download from client = "
    } 
      Name = ${name} 
      Number = ${num}
      Email = ${email}
      ${desc ? "Description = " + desc : ""}
      `,
  });
  console.log(info);
}

async function sendInviteLink(req, res) {
  try {
    const { email, name, num, desc } = req.body;
    handleSendInvite(email, name, num, desc);
    res.status(200).json({
      message: "invitation link sent to the email",
    });
  } catch (err) {
    console.log(err);
  }
}

async function handleContactInfo(email, name, num, desc) {
  let testAccount = await nodemailer.createTestAccount();
  let transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  let info = await transporter.sendMail({
    to: process.env.user,
    from: email,
    subject: "Contact Query from client",
    text: ` 
       "Contact query sent by client" 
        Name = ${name} 
        Number = ${num}
        Email = ${email}
        ${desc ? "Description = " + desc : ""}
        `,
  });
  //   console.log(info);
}

async function sendContactInfo(req, res) {
  try {
    const { email, name, num, desc } = req.body;
    handleContactInfo(email, name, num, desc);
    res.status(200).json({
      message: "invitation link sent to the email",
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = router;
