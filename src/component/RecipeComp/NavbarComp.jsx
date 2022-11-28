import React from "react";
import "./NavbarComp.css";
import Love from './images/Love.png';
import Cart from './images/cart.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Beranda from "../beranda";
import RecipeComp from "./RecipeComponent";
import { CATEGORY, HOME, ORDER, RECIPE } from "../../router";

const NavComp = () =>{
  
 
   
    return (

        <>     
        <div className="navbar">
        <nav>
        <div className="logo">
        <h1>1day fresh</h1>
        </div>
        <ul>
        <li> <a href={HOME}> <strong>Home</strong> </a> </li>
        <li> <a href={CATEGORY}> <strong>Category</strong> </a> </li>
        <li> <a href={RECIPE}><strong>Recipe</strong> </a> </li>
        <li> <a href={ORDER}><strong>Order</strong> </a> </li>
        <a href="#"><img className="love" src={Love} alt="love" /></a>
        <a href="#"><img className="love" src={Cart} alt="love" /></a>
        <button><a href="#">Sign In</a></button>
            <select name="#" id="">
                <option value="">Select Your Location</option>
                <option value="">Select Your Location</option>
                <option value="">Select Your Location</option>
                <option value="">Select Your Location</option>
                <option value="">Select Your Location</option>
                <option value="">Select Your Location</option>
                <option value="">Select Your Location</option>
            </select> 
        <input placeholder="Enter Keyword Search" type="search" />
        </ul>

        {/* <div className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div> */}
</nav>
</div> 


 </>

    )
}

export default NavComp;