import React from 'react'
import '../styles/careertips.css'
import { Link } from 'react-router-dom'

function CareerTips() {
  return (
     <div id="blog-div">
        <h1 className="head">Career Tips</h1>
       <Link to={'/articles/mastering_the_art_of_writing_an_impressive_resume'} >
       <a>
        <div className="blog-container">
            <h1>Mastering the Art of Writing an Impressive Resume: A Step-by-Step Guide</h1>
            <h2>Discover the art of writing an impressive resume with our step-by-step guide for maximum job search success.</h2>
        </div>
    </a>
    </Link>

    <Link to={'/articles/how_to_prepare_and_ace_job_interviews'}>
    <a >
        <div className="blog-container">
            <h1>Interview Success: How to Prepare and Ace Your Job Interviews</h1>
            <h2>Unlock the secrets to interview success and confidently prepare for your job interviews with our expert tips, strategies, and insider advice.</h2>
        </div>
    </a>
    </Link>

    <Link to={'/articles/networking_strategies_for_career_advancement'}>
    <a >    
    <div className="blog-container" id="last-one">
            <h1>Networking Strategies for Career Advancement and Job Opportunities</h1>
            <h2>Discover powerful networking strategies to propel your career forward, expand your professional connections, and unlock a world of exciting job opportunities.</h2>
        </div>
    </a>
    </Link>
    </div>

  )
}

export default CareerTips