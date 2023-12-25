import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import '../styles/detailed_job_skeleton.css'
import SimilarJobItem from './SimilarJobItem'
import { useParams } from 'react-router-dom'


function DetailedJobItemSkeleton() {

return (
<div className='split-view'>
            <div className='main-content'>
                <p className='job-title-sk skeletonic'></p>

                <p className='summary-sk skeletonic'></p>

                <div className="job-description-sk skeletonic">
                      <ul>
                      </ul>
                </div>

                <div className="job-description-sk skeletonic">
                      <ul>
                      </ul>
                </div>

                <br /><br /><br />
            </div>
        </div>
  )
}

export default DetailedJobItemSkeleton