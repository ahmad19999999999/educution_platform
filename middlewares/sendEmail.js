const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
const sendEmail = (mailOptions) => {
  const transporter = nodemailer.createTransport({
    host: "premium174.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_EMAIL_PASSWORD,
    },
  });

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    } else {
      return "";
    }
  });
};

module.exports = sendEmail;
