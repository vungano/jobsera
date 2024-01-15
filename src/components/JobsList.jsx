import React, { useEffect, useState } from 'react'
import FeaturedJobsItem from './FeaturedJobsItem'
import FeaturedJobsItemSkeleton from './FeaturedJobItemSkeleton'
import '../styles/jobslist.css'
import '../styles/searchbar.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import searchedJobsDummy from '../data/searchedJobsDummy'
import Error from './Error'
import { updateSearch } from '../actions'

var count = 0 

function JobsList({searchQuery}) {

    const searchText = useSelector(state=> state.searchReducer)
    const dispatch = useDispatch()
    const [localsearchText, setLocalSearchText] = useState("")
    const [variable, setVariable] = useState(false)
    const linkStyle = {color: 'white'};
    const [searchedJobs, setSearchedJobs] = useState([])
    const [error, setError] = useState(false)
   
  function updateSearchField(event){
    setLocalSearchText(event.target.value)
     }

  useEffect(()=>{
    if(searchQuery){
      //setSearchText(searchQuery)
      dispatch(updateSearch(searchQuery))
      setLocalSearchText(searchQuery)
    }
  },[])
  
  //Function to get featured jobs
  const getSearchedJobs = async()=>{
      try{
        console.log('Trying to get ---------- ' + searchText)
        const url = `https://jobsera.onrender.com/jobs/search?query=${searchText}`
        const api = await fetch(url)
        const data = await api.json()
        setSearchedJobs(data)
        console.log(data)
        
      }
      catch(error){
        ++count 
        if(count<5){
            getSearchedJobs()
        }
        else{
            console.log("ErrOR ENCOUNTERD")
            setError(true)
        }
      }
      console.log("Count is -> " + count)
     
    }

  useEffect(()=>{
      getSearchedJobs()
  },[searchText])


  function updateSearchReducer(){
    dispatch(updateSearch(localsearchText))
    console.log("SEARCHED TEXT INSIDE IS "+ localsearchText)
    setVariable(variable => !variable)
    setSearchedJobs([])
    setError(false)
    count = 0
   
      getSearchedJobs()
    
  }

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

  const skeleton = searchedJobsDummy.map(item =>{
    return <FeaturedJobsItemSkeleton/>
  })

  return (
        <div>
          <div className='searchBarMain'>
            <h1>Your <span>dream job</span> <br />is just one click away.</h1>
            <div className='search-div'>
              <input type="text" placeholder='Job title or Keyword' value={localsearchText} onChange={updateSearchField} />
              <Link to={`/search/${localsearchText}`}><button onClick={updateSearchReducer}>Search</button></Link>
            </div>
          </div>
        
          <div className="jobs_grid-3">
              {(error==false && searchedJobs.length<1) && skeleton}
              {error ? <Error/> : searchedJobItem}
          </div>
        </div>

  )
}

export default JobsList
