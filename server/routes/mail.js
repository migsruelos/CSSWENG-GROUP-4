const nodemailer = require('nodemailer');
const router = express.Router();

/*
    service - mailing service
    auth - authentication, put the sender's email and password here
    user - sender email
    pass - sender pw
*/
const transporter = nodemailer.createTransport({ 
    service: 'hotmail',
    auth: { 
        user: 'swengdummy4@outlook.com',
        pass: 'M1marim!majomi'
    } 
});



router.post('/contact', (req,res) => {
    const {name, email, body} = req.body

    if (!email || !name || !body) {
        return res.status(422).json({error:"please add all the fields"})
    }

    const mailOptions = {
        from: 'swengdummy4@outlook.com',
        to: 'swengdummy4@gmail.com',
        subject: name + " - Website Inquiry",
        text: body + "\n Email me at: " + email + "\n" + name
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Email sent: " + info.response);
        }
    })

    
})