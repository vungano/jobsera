import React from 'react'
import '../styles/featuredjobitem.css'
import econet from '../img/econet.png'
import time from '../img/clock.png'
import { Link } from 'react-router-dom'

function FeaturedJobsItem({title, company, summary, date}) {
  
  const linkStyle = {color: 'white'};

  var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
  var dt = new Date(date.replace(pattern,'$3-$2-$1'));
  var now = new Date()
  const secondsDiff = now.getTime() - dt.getTime() 
  const daysDiff = Math.floor(secondsDiff / ((1000 * 3600 * 24)))
  
  return (
    <div className='job-card'>
        <div className="job-flex">
          <p className='job-title'>{title}</p>
          <div className='sub-flex'>
            <img src={time} alt="" />
            <p className='job-time'>{daysDiff}d</p>
          </div>
        </div>

        <p className="location">{company}</p>
        <div className="rule"></div>

        <p className='job-desc'>
          {summary}
          </p>
        
        <button className='apply-button'>Apply Now</button>

    </div>
    
  )
}

export default FeaturedJobsItem