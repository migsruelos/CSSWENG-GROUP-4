import React from 'react'
import './Contact.css'

const SecondSection = () => {
    return (
        <div className='second-contact'>

            <div className='second-contact-left'>
                <h1>
                    CONTACT <br/>
                    FORM
                </h1>
            </div>

            <div className='second-contact-right'>
                <form id='contactForm'>
                    <input placeholder='Name'/> <br/>
                    <input placeholder='Email'/> <br/>
                    <textarea placeholder='Put your message here...' rows='9' cols='80'/> <br/>
                    <button type='submit' className='form-button'>SEND</button>
                </form>
            </div>
            
        </div>
    )
}

export default SecondSection
