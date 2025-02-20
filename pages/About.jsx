import React from 'react'
import {Navbar} from "../index.jsx"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

export default function About(){
    return(
      <>
        <Navbar />
        <img className="camper-img" src="./images/camper.png" alt="camper"/>
        <div className="about-container">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>Our mission is to enliven your road trip with the perfect travel van rental. 
            Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the 
              magic of touring the world on 4 wheels.</p>
          <div className='destination-container'>
            <h1>Your destination is waiting.
            Your van is ready.</h1>
            <Link to="/vans">
              <button className='explore-btn'>Explore our vans</button>
            </Link>
          </div>
        </div>
  
        <footer>
          <p>Ⓒ 2022 #VANLIFE</p>
        </footer>
      </>
    )
  }