const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
            let transporter = nodemailer.createTransport({
                // host:process.env.MAIL_HOST,
                service: 'gmail',
                port : 587,
                secure: false,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                },
                // service: 'gmail',
                // port : 587,
                // secure: false,
                // auth: {
                //      user: 'khushabusarode111@gmail.com',
                //      pass: 'wtqyyaqgamwpqeut'
                // }
            })


            let info = await transporter.sendMail({
                from: 'StudyNotion || Prasad Morye',
                to:`${email}`,
                subject: `${title}`,
                html: `${body}`,
            })
            console.log(info);
            return info;
    }
    catch(error) {
        console.log(error.message);
    }
}


module.exports = mailSender;

// const nodemailer = require("nodemailer");

// const mailSender = async (email, title, body) => {
//     try{
//             let transporter = nodemailer.createTransport({
//                 host:process.env.MAIL_HOST,
//                 auth:{
//                     user: process.env.MAIL_USER,
//                     pass: process.env.MAIL_PASS,
//                 }
//             })

//             // var info = await transporter.sendMail({
//             //     from: 'StudyNotion || Prasad Morye',
//             //     to:`${email}`,
//             //     subject: `${title}`,
//             //     html: `${body}`,
//             // })

//             var mailOptions = {
//                 from: 'StudyNotion || Prasad Morye',
//                 to:`${email}`,
//                 subject: `${title}`,
//                 html: `${body}`,
//             };
            
//             transporter.sendMail(mailOptions, function(error, info){
//                 if (error) {
//                   console.log(error);
//                 } else {
//                   console.log('Email sent: ' + info.response);
//                 }
//               });
//             console.log(info);
//             // return info;
//     }
//     catch(error) {
//         console.log(error.message);
//     }
// }


// module.exports = mailSender;




