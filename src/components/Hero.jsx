import React, { useState } from 'react'
import Nav from './Nav'
import '../styles/hero.css'
import search from '../img/search.png'
import hero_img from '../img/hero-img.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateSearch } from '../actions'


function Hero() {
    
    const searchText = useSelector(state=> state.searchReducer)
    const dispatch = useDispatch()
   // const [searchText, setSearchText] = useState("")

    function handleChange(event){
        //setSearchText(event.target.value)
        dispatch(updateSearch(event.target.value))
    }

    
  return (
    <div className='hero'>
        <Nav/>

        <div className="flex">
            <div className="side1">
                <h1> We Help You Find Your Dream Job, Or Maybe A Normal One</h1>
                <p>Find your dream job today. Browse thousands of job listings from top companies and apply with ease. Take the next step in your career with our user-friendly job search platform.</p>

                <div className='search-box'>
                    <img src={search} alt="" />
                    <input type="text" placeholder='Job title or Keyword' onChange={handleChange} value={searchText} name="searchText"/>
                    <Link to={`/search/${searchText}`}> <button>Search Job</button></Link>
                </div>
            
            </div>

            <div className="side2">
                <img src={hero_img} alt=""/>
            </div>
        </div>
    </div>
  )
}

export default Hero