const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS
  }
});

module.exports = () => {
  this.sendSignupEmail = (user_email) => {
    let emailOptions = {
      from: process.env.EMAIL,
      to: userEmail,
      subject: "Signup",
      text: ""
    };
    transporter.sendMail(emailOptions, (error, info) => {
      if (error) {
        console.log(error);
      }
    });
  }
}
