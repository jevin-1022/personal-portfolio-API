"use strict"
const nodemailer = require('nodemailer')

//  ************** Example mail obj **************
// const mailObj  = {
//     from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
//     to: "bar@example.com, baz@example.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
// }
const sendEmail = async(mailObj) => {
    try{
        return await sendSMTPEmail(mailObj)
    }catch(error){
        throw error
    }
}

const sendSMTPEmail = async(mailObj) => {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // Gmail SMTP server address
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
              user: process.env.MAIL_USERNAME,
              pass: process.env.MAIL_PASSWORD,
            },
        });

        return new Promise((resolve) => {
          transporter.sendMail({ ...mailObj, from: "Jevin-Portfolio 👻 <jevinvaghasiya102@gmail.com>" }, (err, info) => {
              if (err) {
                resolve({ success: false, data: err });
              } else {
                resolve({ success: true, data: info });
              }
            }
          );
        });
    } catch (error) {
        throw error
    }
}

module.exports = {
    sendEmail
}