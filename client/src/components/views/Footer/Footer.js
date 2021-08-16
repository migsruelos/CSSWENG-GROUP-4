import React from 'react'
import {Icon} from 'antd';
import './Sections/Footer.css';
import FooterLeft from './Sections/FooterLeft.js'
import FooterBreak from './Sections/FooterBreak.js'
import FooterRight from './Sections/FooterRight.js'

function Footer() {
    return (
        <div className="footer">
           <FooterLeft />
           <FooterBreak />
           <FooterRight />
        </div> 
    )
}

export default Footer
