import React from 'react'
import '../styles/footer.css'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import linkedin from '../img/linkedin.png'
import facebook from '../img/facebook.png'
import logo from '../img/dark_logo.png'


function Footer() {
  return (
    <div className='footer'>
        <img src={logo} className='footer-logo' alt="" />
        <div className='flex-footer'>
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
            <img src={facebook} alt="" />
        </div>

        <p className='copyright'>© 2023. All rights reserved | Powered by Candoa Careers </p>
       
    </div>
  )
}

export default Footer