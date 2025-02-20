import React from 'react'
import {Navbar} from "../index.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function Home(){
    return(
      <>
        <Navbar />
        <div className="home-container">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>Add adventure to your life by joining the #vanlife movement. 
            Rent the perfect van to make your perfect road trip.</p>
          <Link to="/vans">
            <button className='find-button'>Find your van</button>
          </Link>
        </div>
        <footer>
          <p>Ⓒ 2022 #VANLIFE</p>
        </footer>
      </>
    )
  }