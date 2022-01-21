//!Working:
//! Send Mail By SendGrid:
const sendGridMail = require('@sendgrid/mail');
require('dotenv').config();

const sendMailBySendgrid = (to, url, txt) => {
    sendGridMail.setApiKey(process.env.MAIL_KEY);

    const emailData = {
        subject: "Account activation link",
        html: `
            <h1> Click link to ${txt} </h1>
            <p>${url}</p>
            <hr/>
            <p>This email contain sensetive info</p>
            <p>${process.env.CLIENT_URL}</p>
        `,
        from: process.env.EMAIL_FROM,
        to: to,
        
        
    }
    sendGridMail.send(emailData).then(sent => {
        console.log("Success");
    }).catch(err => {
        console.log(err);
    })
}

module.exports = sendMailBySendgrid
  