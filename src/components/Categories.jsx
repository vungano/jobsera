import React from 'react'
import '../styles/categories.css'
import JobCategoryItem from './JobCategoryItem'
import jobsCategoriesData from '../data/jobsCategoriesData'
import { Link } from 'react-router-dom'

function Categories() {

    const linkStyle = { color: 'white'};

    const category_item = jobsCategoriesData.map(item=>{
        return <Link key={item.id} to={`/search/${item.title}`} style={linkStyle}> <JobCategoryItem item={item}/> </Link>
    })
    
  
    return (
    <div className='categories'>
        <h1>Popular Job Categories</h1>
        <div className="grid">
             {category_item}
        </div>
    </div>
  )
}

export default Categories
