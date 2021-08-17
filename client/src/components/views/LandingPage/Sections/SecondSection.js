import React from 'react'
import './LandingPage.css'


const SecondSection = () => {
    return (
        <div className="second">

            <div className="second-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br/>
                do eiusmod tempor incididunt ut labore et dolore magna <br/>
                aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing <br/>
                elit, sed do eiusmod tempor incididunt ut labore et dolore<br/>
                magna aliqua.
            </div>

            <div className='second-break'/>

            <div className='second-right'>
                <h1 className='second-right-top'>WHAT IS FOUR T'S?</h1>
                <p className='second-right-mid'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/>
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div>
                    <div className='second-right-bot-circle'/>
                    <p className='second-right-bot'> Lorem Ipsum dolor</p>
                </div>
            </div>

        </div>
    )
}

export default SecondSection
