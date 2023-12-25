import React from "react"
import ReactDOM from "react-dom"
import Main from "./components/Main"
import DetailedSearch from "./components/DetailedSearch"
import DetailedJob from "./components/DetailedJob"
import Article1 from "./components/Article1"
import Article2 from "./components/Article2"
import Article3 from "./components/Article3"
import Admin from "./components/Admin"
import Nav from "./components/Nav"
import './styles/style.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <div className="main">
            <Routes>
                <Route path='/' exact element={<Main/>}/>
                <Route path='/search/:searchQuery' element={<DetailedSearch/>}/>
                <Route path='/job_details/:id' element={<DetailedJob/>}/>
                <Route path='/articles/mastering_the_art_of_writing_an_impressive_resume' element={<Article1/>}/>
                <Route path='/articles/how_to_prepare_and_ace_job_interviews' element={<Article2/>}/>
                <Route path='/articles/networking_strategies_for_career_advancement' element={<Article3/>}/>
                <Route path='/adama_traore' element={<Admin/>} />
            </Routes>

        </div>
    </BrowserRouter>    
  )
}

export default App