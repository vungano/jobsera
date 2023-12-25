import React from 'react'
import '../styles/similarjobitem.css'
import time from '../img/clock.png'


function SimilarJobItem() {
  return (
    <div className='similar-job-card'>
        <div className="similar-job-flex">
          <p className='similar-job-title'>Software Eng</p>
          <div className='similar-sub-flex'>
            <img src={time} alt="" />
            <p className='similar-job-time'>2d</p>
          </div>
        </div>

        <p className="similar-location">Econet - Harare</p>
        
        
        
    </div>
  )
}

export default SimilarJobItem