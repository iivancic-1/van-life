import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"


export function Navbar(){
  return (
    <header>
        <Link to="/">
          <span>#VANLIFE</span>
        </Link>
        <div className="links">
          <Link className="nav" to="/about">About</Link>
          <Link className="nav" to="/vans">Vans</Link>
        </div>
      </header>
  )
}




function Vans(){
  return(
    <Navbar />
  )
}


function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
      </Routes>
      </BrowserRouter>
    )
  }

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
