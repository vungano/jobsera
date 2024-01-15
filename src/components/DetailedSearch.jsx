import React from 'react'
import Nav from './Nav'
import SearchBar from './SearchBar'
import main from '../styles/style.css'
import JobsList from './JobsList'
import { useParams } from 'react-router-dom'

function DetailedSearch() {

  const {searchQuery} = useParams()

  return (
    <div className='main'>
        <Nav/>
        <JobsList searchQuery={searchQuery}/>
    </div>
  )
}

export default DetailedSearch
