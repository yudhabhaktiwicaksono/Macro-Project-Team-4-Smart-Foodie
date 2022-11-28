import React from "react";
import "./RecipeFood.css";

const RecipeFood = (props) =>{

    return (

        <>
        <div className="container-recipe">
            <div className="header-recipe">
                <h1 className="head-recipe" align="center">{props.header}</h1>
            </div>
            <div className="foods">
                <div className="header-foods">
                    <h1>{props.headerFood}</h1>
                    <a href="">See All</a>
                </div>
            </div>
        </div>
        
        
        </>


    )

}

RecipeFood.defaultProps ={
    header : '',
    headerFood : '',
}

export default RecipeFood;