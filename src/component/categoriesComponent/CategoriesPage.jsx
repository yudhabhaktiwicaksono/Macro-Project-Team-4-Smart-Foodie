import React from "react";
import FlashSaleCard from "../flashSaleComponent/FlashSaleCard";
import "./CategoriesPage.css";
import NavComp from "../RecipeComp/NavbarComp";
import Produk from "./produk/Produk";
import Footer from "../footerComponent/Footer";
import telur from "../images/telur.png";
import cucumber from "../images/cucumber.png";
import orange from "../images/orange.png";
import cabbage from "../images/cabbage.png";
const CategoriesPage = () =>{

    return (

        <>
        <nav>
            <NavComp/>
        </nav>
        
        <div id="Product">
            <Produk/>
        </div>
        <div className="product-container">
        <h1 align="center">SEE MORE PRODUCTS</h1>
        <div className="more-product">
        <div className="more-card" >
            <FlashSaleCard 
            img={telur}
            name="Eggs"
            />
            <FlashSaleCard
            img={cucumber}
            name="Cucumber"
            />
            <FlashSaleCard
            img={orange}
            name="Orange"
            />
            <FlashSaleCard
            img={cabbage}
            name="Cabbage"
            />
        </div>
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

export default CategoriesPage;