import React from 'react'
import './Contact.css'
import nodemailer from 'nodemailer'
import {useState} from 'react'

const SecondSection = () => {

    

    
    const [details, setDetails] = useState({name: "", email:"", body: ""});
    
    const nameHandler = e => {
        setDetails({...details, name: e.target.value})
    }
    
    const emailHandler = e => {
        setDetails({...details, email: e.target.value})
    }
    
    const bodyHandler = e => {
        setDetails({...details, body: e.target.value})
    }
    
    // just a temporary function, does nothing but display into the broswer console
    const temp = e => {
        console.log(details.name + "\n" + details.email + "\n" + details.body)
    }
    
    /*
    service - mailing service
    auth - authentication, put the sender's email and password here
    user - sender email
    pass - sender pw
    */
    var transporter = nodemailer.createTransport({ 
        service: 'hotmail',
        auth: { 
            user: 'swengdummy4@outlook.com',
            pass: 'M1marim!majomi'
        } 
     });

    /**
     * 
     * from - sender email
     * to - receiver email (company email)
     * subject - mail subject 
     * text - mail body 
     */
    var mailOptions = {
        from: 'swengdummy4@outlook.com',
        to: 'swengdummy4@gmail.com',
        subject: details.name + " - Website Inquiry",
        text: details.body + "\n Email me at: " + details.email + "\n" + details.name
    }

    const mailSend = e => {
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
            }
            else {
                console.log("Email sent: " + info.response);
            }
        })
    }

    return (
        <div className='second-contact'>

            <div className='second-contact-left'>
                <h1>
                    CONTACT <br/>
                    FORM
                </h1>
            </div>

            <div className='second-contact-right'>
                <form id='contactForm' onSubmit={mailSend}>
                    <input placeholder='Name (FN LN)' name='name' value={details.name} onChange={nameHandler}/> <br/>
                    <input placeholder='Email' name='email' value={details.email} onChange={emailHandler}/> <br/>
                    <textarea placeholder='Put your message here...' rows='9' cols='80' name='body' value={details.body} onChange={bodyHandler} /> <br/>
                    <button type='submit' className='form-button'>SEND</button>
                </form>
            </div>
            
        </div>
    )
}

export default SecondSection
