import React, { useEffect, useState } from 'react'
import '../styles/featuredJobs.css'
import FeaturedJobsItem from './FeaturedJobsItem'
import FeaturedJobsItemSkeleton from './FeaturedJobItemSkeleton'
import { Link } from 'react-router-dom'
import featuredJobsDummy from '../data/featuredJobsDummy'
import '../styles/featuredjobitemskeleton.css'

function FeaturedJobs() {
    
    const linkStyle = {color: 'white'};

    const [featuredJobs, setFeaturedJobs] = useState([])
    
    //Function to get featured jobs
    const getFeaturedJobs = async()=>{
        const url = "https://jobsera.onrender.com/jobs/get_featured"
        const api = await fetch(url)
        const data = await api.json()
        setFeaturedJobs(data)
    }

    useEffect(()=>{
        getFeaturedJobs()
    },[])

    console.log("Featured Yobs")
   console.log(featuredJobs)
    
    const featuredJobItem = featuredJobs.map(item =>{
        return <Link to={`/job_details/${item.id}`} state={linkStyle}>
            <FeaturedJobsItem
                    key={item.id}
                    title = {item.title}
                    company = {item.company}
                    summary = {item.summary}
                    date = {item.date}
                />
            </Link>
    })

    const hello = featuredJobsDummy.map(item =>{
        return <FeaturedJobsItemSkeleton/>
    })

    return (
    <div className='feat-jobs'>
        <h1>Featured Jobs</h1>
        <div className="grid-3">
            {featuredJobs.length < 1 ?  hello : featuredJobItem}
        </div>
    </div>
  )
}

export default FeaturedJobs