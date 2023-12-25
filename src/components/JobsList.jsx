import React, { useEffect, useState } from 'react'
import FeaturedJobsItem from './FeaturedJobsItem'
import FeaturedJobsItemSkeleton from './FeaturedJobItemSkeleton'
import '../styles/jobslist.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import searchedJobsDummy from '../data/searchedJobsDummy'

function JobsList() {

  const searchText = useSelector(state=> state.searchReducer) 

  console.log("Search text is " + searchText)

  const linkStyle = {color: 'white'};
  const [searchedJobs, setSearchedJobs] = useState([])
  
  //Function to get featured jobs
  const getSearchedJobs = async()=>{
      const url = `https://jobsera.onrender.com/jobs/search?query=${searchText}`
      const api = await fetch(url)
      const data = await api.json()
      setSearchedJobs(data)
  }

  useEffect(()=>{
      getSearchedJobs()
  },[searchText])


  const searchedJobItem = searchedJobs.map(item =>{
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

  const skeletonLoaders = searchedJobsDummy.map(item =>{
    return <FeaturedJobsItemSkeleton/>
  })

  return (
        <div className="jobs_grid-3">
            {searchedJobs.length <  1 ? skeletonLoaders : searchedJobItem}
        </div>
  )
}

export default JobsList