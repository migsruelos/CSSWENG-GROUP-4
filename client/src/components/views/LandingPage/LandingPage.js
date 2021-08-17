import React from 'react'
import { FaCode } from "react-icons/fa";
import FirstSection from './Sections/FirstSection';
import SecondSection from './Sections/SecondSection';
import ThirdSection from './Sections/ThirdSection';
import FourthSection from './Sections/FourthSection';

function LandingPage() {
    return (
        <div>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection />
        </div>
    )
}

export default LandingPage
