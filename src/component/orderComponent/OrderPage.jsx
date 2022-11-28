import React from "react";
import "./OrderPage.css";
import NavComp from "../RecipeComp/NavbarComp";
import OrderCard from "./OrderCard,";
import OrderTab from "./OrderTab";
import Footer from "../footerComponent/Footer";


const OrderPage = () =>{

    return (

        <>
        
        <nav>
            <NavComp/>
        </nav>
        <div id="order-tab">
            <OrderTab/>
        </div>
        <div id="order-card">
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
        </div>

        <div className="footer">
            <footer>
                <Footer/>
            </footer>
        </div>
        </>
        
    )
}

export default OrderPage;