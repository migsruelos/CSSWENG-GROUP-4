import React from 'react'
import './LandingPage.css'
import pic from '../images/fourth.png'

const FourthSection = () => {
    return (
        <div>
            <div className="fourth">
                <div className="fourth-left">
                    <img src={pic}/>
                </div>
                <div className="fourth-right">
                    <h1>OUR PROJECTS</h1>
                    <p>SEE ALL THE PREVIOUS PROJECTS WE'VE WORKED ON</p>
                    <a href="/">
                        <div className="fourth-button">
                            ALL PROJECTS
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FourthSection
