import React from 'react'
import './Contact.css'
import { useState } from 'react';
import { send } from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_DwlB71iH2cqNwLXXkLAGH");

const SecondSection = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
          'service_7ra2jom',
          'template_h74fncn',
          toSend,
          'user_DwlB71iH2cqNwLXXkLAGH'
    )
           .then((response) => {
             console.log('SUCCESS!', response.status, response.text);
           })
           .catch((err) => {
             console.log('FAILED...', err);
           });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <div className='second-contact'>

            <div className='second-contact-left'>
                <h1>
                    CONTACT <br/>
                    FORM
                </h1>
            </div>

            <div className='second-contact-right'>
                <form id='contactForm' onSubmit={onSubmit}>
                    <input type ='text' name='from_name' placeholder='from name' value={toSend.from_name} onChange={handleChange}/> <br/>
                    <input type ='text' name='to_name' placeholder='to name' value={toSend.to_name} onChange={handleChange}/> <br/>
                    <textarea type ='text' name='message' placeholder='message' rows='9' cols='80' value={toSend.message} onChange={handleChange}/> <br/>
                    <input type ='text' name='reply_to' placeholder='your email' value={toSend.reply_to} onChange={handleChange}/><br/>
                    <button type='submit' className='form-button' style={{marginTop: 30}}>Submit</button>
                </form>
            </div>
            
        </div>
    )
}

export default SecondSection
