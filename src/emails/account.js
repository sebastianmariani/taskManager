const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'example@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'example@gmail.com',
        subject: 'We are sorry to see you going!',
        text: `Hey ${name}, We are sorry to see you goin. We would like to understand why you left our services and a feedback.`
    })
}
module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
