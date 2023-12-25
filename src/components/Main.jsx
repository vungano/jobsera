import React from 'react'
import Hero from "./Hero"
import Categories from "./Categories"
import FeaturedJobs from "./FeaturedJobs"
import About from './About'
import Footer from './Footer'
import CareerTips from './CareerTips'


function Main() {
  return (
    <div>
        <Hero/>
        <About/>
        <Categories/>
        <FeaturedJobs/>
        <CareerTips/>
        <Footer/>
    </div>
  )
}

export default Main