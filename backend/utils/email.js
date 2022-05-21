const nodemailer=require("nodemailer");

const emailSend=async options=>{
    const transporter1=nodemailer.createTransport({
        service: "gmail",
        //host: "smtp.mailtrap.io",            //Use the commented cred when in dev
        //port: 2525,
        auth: {
            user: process.env.EMAIL_USER, //"7c496ecc378596",
            pass: process.env.EMAIL_PASS //"4b871f172181e0"
        }
    });

    const mailOptions={
        from: process.env.EMAIL_USER,
        to:options.email,
        subject:options.subject,
        text:options.message
    }
    await transporter1.sendMail(mailOptions);
}

module.exports=emailSend;