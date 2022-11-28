import React from "react";
import "./FlashSalePage.css";
import NavComp from "../RecipeComp/NavbarComp";
import FlashSale from "./images/flashsale.png";
import FlashSaleTab from "./FlashSaleTab";
import FlashSaleCard2 from "./FlashSaleCard2";
import segera from "./images/segera.png";
import masih from "./images/masih.png";
import tersisa from "./images/tersisa.png";
import Footer from "../footerComponent/Footer";

const FlashSalePage = () =>{
     const FlashSaleImg = {
        width:'1300px',
     };

    return (

        <>
        <nav> <NavComp/> </nav>

        <div className="flashSale-header">
            <img style={FlashSaleImg} src={FlashSale} alt="" />
        </div>
        <div id="FlashSale-tab">
            <FlashSaleTab/>
        </div>
        <div className="flashSale-card-container">
            <div id="flashSale-Cards">
            <FlashSaleCard2 status={masih}/>
            <FlashSaleCard2 status={masih}/>
            <FlashSaleCard2 status={tersisa}/>
            <FlashSaleCard2 status={masih}/>
            <FlashSaleCard2 status={segera}/>
            <FlashSaleCard2 status={masih}/>
            <FlashSaleCard2 status={tersisa}/>
            <FlashSaleCard2 status={tersisa}/>
            <FlashSaleCard2 status={masih}/>
            <FlashSaleCard2 status={masih}/>
            <FlashSaleCard2 status={masih}/>
            <FlashSaleCard2 status={segera}/>
            <FlashSaleCard2 status={masih}/>
            <FlashSaleCard2 status={masih}/>
            <FlashSaleCard2 status={masih}/>
            <FlashSaleCard2 status={segera}/>
            <FlashSaleCard2 status={segera}/>
            <FlashSaleCard2 status={masih}/>
            <FlashSaleCard2 status={segera}/>
            <FlashSaleCard2 status={segera}/>
            
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

export default FlashSalePage;