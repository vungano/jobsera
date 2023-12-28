import React from 'react'
import Nav from './Nav'
import '../styles/not_found.css'
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <div>
        <Nav/>
        <div className="not-found">
        <iframe src="https://giphy.com/embed/1oJLpejP9jEvWQlZj4" width="480" height="246" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>
        <Link to={'/'} className='lost-home' ><p>Looks like we got lost there,lets try this again :|</p></Link>
    </div>
  )
}

export default NotFound