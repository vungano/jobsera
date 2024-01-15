import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import '../styles/detailed_job.css'
import SimilarJobItem from './SimilarJobItem'
import DetailedJobItem from './DetailedJobItem'
import DetailedJobItemSkeleton from './DetailedJobItemSkeleton'
import { useParams } from 'react-router-dom'
import Error from './Error'

var count = 0 

function DetailedJob({match}) {

  const {id} = useParams();
  const [jobObject, setJobObject] = useState({})
  const [error, setError] = useState(false)
 
  //Function to get job object
  const getFeaturedJobs = async()=>{
    try{
      const url = `https://jobsera.onrender.com/jobs/${id}`
      const api = await fetch(url)
      const data = await api.json()
      setJobObject(data)
    }
    catch{
      ++count 
            if(count<5){
                getFeaturedJobs()
            }
            else{
                setError(true)
            }
    }
}

  useEffect(()=>{
      getFeaturedJobs()
  },[])

  console.log("-----------")
  console.log(jobObject.id)
  console.log("-----------")

 return (
    <div>
        <Nav/>
        {jobObject.id == undefined ? <DetailedJobItemSkeleton/> : <DetailedJobItem
            id = {jobObject.id}
            title = {jobObject.title}
            company = {jobObject.company}
            date = {jobObject.date}
            summary = {jobObject.summary}
            duties = {jobObject.duties}
            qualifications = {jobObject.qualifications}
            applyInstructions = {jobObject.applyInstructions}
            applyLink = {jobObject.applyLink}
            tags = {jobObject.tags}
            featured = {jobObject.featured}
            category = {jobObject.category}

        />}
        
        
    </div>
  )
}

export default DetailedJob
