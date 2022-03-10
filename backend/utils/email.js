const nodemailer=require("nodemailer");

const emailSend=async options=>{
    const transporter1=nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "7c496ecc378596",
            pass: "4b871f172181e0"
        }
    });
    const mailOptions={
        from: "<admin@flipkart.com>",
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    await transporter1.sendMail(mailOptions);
}

module.exports=emailSend;