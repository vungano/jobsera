import React, { useEffect, useState } from 'react'
import '../styles/featuredJobs.css'
import FeaturedJobsItem from './FeaturedJobsItem'
import FeaturedJobsItemSkeleton from './FeaturedJobItemSkeleton'
import { Link } from 'react-router-dom'
import Error from './Error'
import featuredJobsDummy from '../data/featuredJobsDummy'
import '../styles/featuredjobitemskeleton.css'

var count = 0 

function FeaturedJobs() {
    
    const linkStyle = {color: 'white'};
    const [featuredJobs, setFeaturedJobs] = useState([])
    const [error, setError] = useState(false)    

    //Function to get featured jobs
    const getFeaturedJobs = async()=>{
        try{
        const url = "https://jobsera.onrender.com/jobs/get_featured"
        const api = await fetch(url)
        const data = await api.json()
        setFeaturedJobs(data)             
    }
        catch(error){
            console.log("Ërror encountered")
            console.log(error)
            console.log("End of error")
            ++count 
            if(count<5){
                getFeaturedJobs()
            }
            else{
                setError(true)
            }
        }
        //console.log("Count is -> " + count)
     
    }

    useEffect(()=>{
        getFeaturedJobs()
    },[])
    
    const featuredJobItem = featuredJobs.map(item =>{
        return <Link key={item.id} to={`/job_details/${item.id}`} state={linkStyle}>
            <FeaturedJobsItem
                    key={item.id}
                    title = {item.title}
                    company = {item.company}
                    summary = {item.summary}
                    date = {item.date}
                />
            </Link>
    })

    const skeleton = featuredJobsDummy.map(item =>{
        return <FeaturedJobsItemSkeleton/>
    })

    return (
    <div className='feat-jobs'>
        <h1>Featured Jobs</h1>
        <div className="grid-3">
            {(error==false && featuredJobs.length<1) && skeleton}
            {error ? <Error/> : featuredJobItem}
        </div>
    </div>
  )
}

export default FeaturedJobs
