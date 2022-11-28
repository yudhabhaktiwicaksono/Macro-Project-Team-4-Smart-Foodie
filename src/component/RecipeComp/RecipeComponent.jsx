import React from "react";
import NavComp from "./NavbarComp";
import RecipeCard from "./RecipeCard";
import "./RecipeComponent.css";
import RecipeFood from "./RecipeFood";
import tomato from "./images/tomato.png";
import meat from "./images/meat.png"
import vegetable from './images/vegetable.png';
import tofu from "./images/tofu.png";
import chicken from './images/chicken.png';
import sour from './images/sour.png';
import hot from './images/Hotlemon.png';
import green from './images/green.png';
import lemon from './images/lemon.png';
import watermelon from './images/watermelon.png';
import aple from './images/aple.png';
import herbal from './images/herbal.png';
import apple from './images/apple.png';
import garlic from './images/garlic.png';
import fruit from './images/fruit.png';
import beef from './images/beef.png';
import oat from './images/oat.png';
import salad from './images/salad.png';
import Footer from "../footerComponent/Footer";


const RecipeComp = () =>{

    return (

        <>
        <nav>
            <NavComp/>
        </nav>
        <div id="Recipe">
            <h1 align="center"> Assorted Recipes</h1>
            <RecipeFood
            headerFood="Food"/>
            <div className="recipe-food">
                <RecipeCard 
                img={meat} 
                content="Sauted meal"/>
                <RecipeCard 
                img={tomato} 
                content="Tomato broccoli oyster sauce"/>
                <RecipeCard 
                img={vegetable}
                content="Vegetable Salad"/>
                <RecipeCard 
                img={tofu}
                content="Tofu pakcoy soup"/>
                <RecipeCard 
                img={chicken}
                content="Chicken kale noodles"/>
                <RecipeCard 
                img={sour}
                content="Sour Vegetable"/>
            </div>
        </div>

        <div id="Recipe2">
            <RecipeFood
            headerFood="Drink"/>
            <div className="recipe-food">
                <RecipeCard 
                img={hot} 
                content="Hot lemon turmeric"/>
                <RecipeCard 
                img={green} 
                content="Green spinach juice"/>
                <RecipeCard 
                img={lemon}
                content="Squish lemon"/>
                <RecipeCard 
                img={watermelon}
                content="Fresh watermelon juice"/>
                <RecipeCard 
                img={aple}
                content="Apple cider juice"/>
                <RecipeCard 
                img={herbal}
                content="Herbal turmeric herbs"/>
            </div>
        </div>

        <div id="Recipe3">
            <RecipeFood
            headerFood="Snack"/>
            <div className="recipe-food">
                <RecipeCard 
                img={apple} 
                content="Hot lemon turmeric"/>
                <RecipeCard 
                img={garlic} 
                content="Green spinach juice"/>
                <RecipeCard 
                img={fruit}
                content="Squish lemon"/>
                <RecipeCard 
                img={beef}
                content="Fresh watermelon juice"/>
                <RecipeCard 
                img={oat}
                content="Apple cider juice"/>
                <RecipeCard 
                img={salad}
                content="Herbal turmeric herbs"/>
            </div>
        </div>
        <div className="footer">
            <footer>
                <Footer/>
            </footer>
        </div>
        </>

    )

}

export default RecipeComp;