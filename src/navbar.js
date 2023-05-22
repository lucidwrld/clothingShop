import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navbar() {
 library.add(faSearch, faBars);
 return (
  <div className="navbar">
   <div className="logo"></div>
   <ul className="nav-links">
    <Link to="/">Home</Link>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact Us</Link>
   </ul>
   <div className="navBtn">
    <button><FontAwesomeIcon icon='search' /></button>
    <button><FontAwesomeIcon icon='bars' /></button>
   </div>
  </div>
 );

}