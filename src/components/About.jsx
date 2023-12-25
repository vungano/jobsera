import React from 'react'
import '../styles/about.css'
import about_pic from '../img/about_us.jpg'

function About() {
  return (
    <div>
        <h1 className='about-head'>About Us</h1>

        <div className="about-flex">
            <img src={about_pic} alt="" />
            <p>Jobsera is your ultimate destination for finding the perfect job! Our mission is to connect job seekers with the right employers and opportunities. 
                Whether you're looking for your first job or are a seasoned professional seeking a new challenge, we're here to help.
                
                <br/><br />

                We understand that the job search process can be overwhelming and time-consuming. That's why we've created a user-friendly platform that makes it easy to search, apply, and track job listings from a variety of industries and locations.

                <br /><br />    

                Our team is dedicated to providing you with the most current and accurate job listings available. We partner with top employers to bring you exclusive job opportunities that you won't find anywhere else. 

                </p>
        </div>

    </div>
  )
}

export default About