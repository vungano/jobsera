import React, { useEffect, useState } from 'react'
import '../styles/searchbar.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateSearch } from '../actions'

function SearchBar({searchQuery}) {

    const searchText = useSelector(state=> state.searchReducer)
    const dispatch = useDispatch()
    const [localsearchText, setLocalSearchText] = useState("")

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
  

  function updateSearchReducer(){
    dispatch(updateSearch(localsearchText))
  }

  return (
    <div className='searchBarMain'>
        <h1>Your <span>dream job</span> <br />is just one click away.</h1>
        <div className='search-div'>
            <input type="text" placeholder='Job title or Keyword' value={localsearchText} onChange={updateSearchField} />
            <Link to={`/search/${searchText}`}><button onClick={updateSearchReducer}>Search</button></Link>
        </div>

    </div>
  )
}

export default SearchBar