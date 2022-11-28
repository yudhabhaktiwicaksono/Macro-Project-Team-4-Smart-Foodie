import React from "react";
import "./RecipeCard.css";
import eye from "./images/eye.png";
import like from "./images/like.png";
import share from './images/share.png'
import { PRODUCT } from "../../router";


const RecipeCard = (props) =>{
    return(
        <>
         <div className="card-foods">
<div className="cards-food">
    <div className="img-food">
       <a href={PRODUCT}><img src={props.img} alt="" /></a> 
    </div>
    <div className="content-food">
        <h4>{props.content}</h4>
    </div>
    <div className="food-rating">
           <a href=""> <img src={eye} alt="" /> 100x</a>
           <a href=""> <img src={like} alt="" /> 100x</a>
           <a href=""> <img src={share} alt="" /> 100x</a>
        </div>
    
</div>
</div>

        
        
        </>

    )
   
}

export default RecipeCard;