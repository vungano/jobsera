import React, { useState } from 'react'
import '../styles/admin.css'
import axios from 'axios'

function Admin() {
  
    const [responseCompany, setResponseCompany] = useState("")
    const [jsonData, setJsonData] = useState({}) 

    function handleChange(event){
        setJsonData(JSON.parse(JSON.stringify(event.target.value)))
        console.log(`${{jsonData}}`)
    }
        const postData = () => {
            const url = "https://jobsera.onrender.com/jobs";
            fetch(url, 
            {method: 'POST', // or 'PUT'
            headers: { 'Content-Type': 'application/json',},
            body: `{${jsonData}}`,
        })
        .then(response => response.json())
        .then(data => {
      console.log('Success:', data);
      setResponseCompany(data.title)
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    
    }
    

    return (
    <div>
        <textarea type="text" className='jsonTextBox' onChange={handleChange} value={jsonData} name="searchText" />
        <p className='responseCompany'>{responseCompany}</p>
        <button className='submitJsonButton' onClick={postData}>Submit</button>
    </div>
  )
}

export default Admin