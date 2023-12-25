import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import '../styles/detailed_job.css'
import SimilarJobItem from './SimilarJobItem'
import { useParams } from 'react-router-dom'


function DetailedJobItem(props) {

    let dutiesList, qualifications, applyInstructions
    const applyLink = `mailto:${props.applyLink}`
      
    console.log("Apply Link "+ applyLink)
    
    if(props.duties != undefined){
        dutiesList = props.duties.map((item)=>{
          return <li>{item}</li>
      })
    }
  
    if(props.qualifications != undefined){
      qualifications = props.qualifications.map((item)=>{
        return <li>{item}</li>
      })
    }
  
    if(props.applyInstructions != undefined){
      applyInstructions = props.applyInstructions.map((item)=>{
        return <li>{item}</li>
      })
    }  
  

return (
<div className='split-view'>
            <div className='main-content'>
                <p className='job-title'>{props.title}</p>

                <p className='summary'>{props.summary}</p>

                <div className="job-description">
                    {props.duties.length>0 && <p>Duties and Responsibilities</p>}
                      <ul>
                          {dutiesList}
                      </ul>
                </div>

                <div className='qualifications'>
                  {props.qualifications.length>0 && <p>Qualifications and Experience</p>}
                  <ul>
                    {qualifications}
                  </ul>
                </div>

              <div className='how-to-alilily'>
                {props.applyInstructions.length>0 && <p>How to apply</p>}
                  <ul>
                    {applyInstructions}
                  </ul>
                
                </div>

                {props.applyLink.length>1 && <button className='apply-now'><a href={applyLink} target='_blank'>Apply Now</a></button>}
                <br /><br /><br />
            </div>
        </div>
  )
}

export default DetailedJobItem