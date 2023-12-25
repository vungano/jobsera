import React from 'react'
import '../styles/featuredjobitemskeleton.css'
import econet from '../img/econet.png'
import time from '../img/clock.png'
import { Link } from 'react-router-dom'

function FeaturedJobsItemSkeleton() {
  
  const linkStyle = {color: 'white'};

  
  return (
    <div className='job-card-sk'>
        <div className="job-flex-sk">
          <p className='job-title-sk skeleton'></p>
          <div className='sub-flex-sk skeleton'>
            <p className='job-time-sk'></p>
          </div>
        </div>

        <p className="location-sk"></p>
        <div className="rule-sk skeleton"></div>

        <p className='job-desc-sk skeleton'>
          </p>
        
        <button className='apply-button-sk skeleton'></button>

    </div>
    
  )
}

export default FeaturedJobsItemSkeleton