import React from 'react'
import { useRef } from 'react'
import '../styles/nav.css'
import logo from '../img/logo.png'
import hamburger from '../img/hamburger.png'
import { Link } from 'react-router-dom'

function Nav() {
 
  const navRef = useRef()

  function toggleNav(){
      navRef.current.classList.toggle("nav-visibility")
   }

  return (
    <header>
        <div className='nav'>
            <img src={logo} alt="" className='logo' />
            <div className='flexd'>
            <div>
                <ul>
                    <Link to={'/'} ><li className='nav-li'>Home</li></Link>
                    <li className='nav-li'>About</li>
                    <Link to={'/search/jobs'}  ><li className='nav-li'>Jobs</li></Link> 
                    <li className='nav-li'>Career Tips</li>
                </ul>
            </div>

          <button onClick={toggleNav} className='nav-button'><img src={hamburger} alt="" className='hamburger' /></button>
          </div>
        </div>

        <div className="mobile-nav" ref={navRef}>
          <ul className='mobile-ul' >
            <Link to={'/'} ><li className='nav-li-2'>Home</li></Link>
            <li className='nav-li-2'>About</li>
            <Link to={'/search'}  ><li className='nav-li-2'>Jobs</li></Link> 
            <li className='nav-li-2'>Career Tips</li>
          </ul>
        </div>


    </header>
  )
}

export default Nav