import React from 'react'
import '../styles/jobcategoryitem.css'

function JobCategoryItem({item}) {
  return (
    <div className='main-categories'>
        <div className="image-holder">
            <img src={item.img} alt="" />
        </div>
        <div>
            <p className='job-cat'>{item.title}</p>
        </div>
    </div>
  )
}

export default JobCategoryItem