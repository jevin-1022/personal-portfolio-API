const fs = require('fs')
const Path = require('path');
const handlebars = require('handlebars');

module.exports = {
    async sendMail(payload){

        const Templates = Path.resolve(__dirname, '..', 'utilities');
        const htmlFile = fs.readFileSync(`${Templates}/templates/mail-template.html`, "utf8");
        const logoImg = fs.readFileSync(`${Templates}/images/logo.png`);
        // handlebars.registerHelper('increment', function (value) {
        //     return value + 1;
        // });

        payload['logo'] = `${Templates}/images/logo.png`

        const HTML = handlebars.compile(htmlFile)(payload);

        const mailObj  = {
            // to: payload.email, // list of receivers
            to: "jevinvaghasiya102@gmail.com", // list of receivers
            subject: "Hello Jevin! Please see Application ✔", // Subject line
            text: payload.message, // plain text body
            html: HTML, // html body,
            attachments: [{
                filename: 'logo.png',
                content: logoImg,
                encoding: 'base64',
                cid: 'logoImagePNG', // Referenced in the HTML template
            }]
        }

        const mailHelper = require(`${Templates}/email.helper`)
        return await mailHelper.sendEmail(mailObj)
    }
}