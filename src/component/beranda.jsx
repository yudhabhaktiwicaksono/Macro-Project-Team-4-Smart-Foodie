import React from "react";
import "./beranda.css";
import Love from './Love.png';
import Cart from './cart.png';
import App from "../App";
import FlashSaleComp from "./flashSaleComponent/FlashSaleComp";
import FlashSaleCard from  "./flashSaleComponent/FlashSaleCard";
import CategoriesComp from "./categoriesComponent/CategoriesComp";
import Recipes from "./LatestRecipesComponent/LatiesComponent";
import FooterComp from "./footerComponent/FooterComp";
import Footer from "./footerComponent/Footer";
import labu from "./images/labu.png"
import apple from "./images/apple.png";
import lemon from "./images/lemon.png";
import kentang from "./images/kentang.png";
import bayam from "./images/bayam.png";
import pete from "./images/pete.png";
import telur from "./images/telur.png";
import terong from "./images/terong.png";
import starawberry from "./images/strawberry.png";
import jeruk from "./images/jeruk.png";
import soup from "./LatestRecipesComponent/images/soup.png";
import ramen from "./images/ramen.png";
import salad from "./images/salad.png";
import lime from "./images/lime.png";
import NavComp from "./RecipeComp/NavbarComp";
import { RECIPE, ViewFlash } from "../router";
const Beranda = ()=> {
  
    return(
      <>
        <div className="wrapper">
            <nav>
              <NavComp/>
            </nav>
            <div className="carousel">
              <App/>
            </div>
            <div className="FlashSale">
              <div className="flash-tab">
              <FlashSaleComp 
              countdownTimestampMs={10335686000000}/>
              <button><a href={ViewFlash}>View All</a></button>
              </div>
            </div>
            <div className="component">
              <div className="flash-card">
             <FlashSaleCard 
             img={labu}
              name="Pumpkin"/>
            <FlashSaleCard 
             img={apple}
              name="Apple"/>
              <FlashSaleCard 
             img={lemon}
              name="Lemon"/>
              <FlashSaleCard 
             img={kentang}
              name="Potato"/>
              <FlashSaleCard 
             img={bayam}
              name="Chinese Cabbage"/>
              <FlashSaleCard 
             img={pete}
              name="Pea"/>
              <FlashSaleCard 
             img={telur}
              name="Eggs"/>
              <FlashSaleCard 
             img={terong}
              name="Eggplant"/>
              <FlashSaleCard 
             img={starawberry}
              name="Strawberry"/>
              <FlashSaleCard 
             img={jeruk}
              name="Orange"/>
              </div>
            
            </div>
            <div className="categories">
              <CategoriesComp/>
            </div>
          <div className="headerLatest">
            <div id="header">
             <h1>Recipes</h1>
              <h2>LATEST RECIPES</h2>
              </div>
            <div className="recipesLatest">
              <div className="recipe-card">
              <Recipes
              img={soup}
              name="Potatoes Soup with Brocol"
              />
              <Recipes
              img={ramen}
              name="Chineese Shrimp Ramen with Peas"
              />
              <Recipes
              img={salad}
              name="Veggie Salad"
              />
              <Recipes
              img={lime}
              name="Healthy Lime and 
              Pomegranate Ice Drink"
              />
              </div>
            </div>
           
          </div>
         <div className="fieldset">
         <fieldset> 
            <legend align="center"><button> <a href={RECIPE}>View More</a></button></legend>
           </fieldset>
         </div>
         <div className="footer">
              
          <footer>
              <FooterComp/>
              <Footer/>
          </footer>
         </div>
        </div>
        </>
    )
}

export default Beranda;