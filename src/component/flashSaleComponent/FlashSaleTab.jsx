import React from "react";
import "./FlashSaleTab.css";
import FlashSaleTime from "./FlashSaleTime";

const FlashSaleTab = () =>{

    return (

        <>
        <div className="flashSale-container">
            <div className="flashSale-tabs">
                <div className="flashSale-btn">
                <button className="flashSale-btn1"> <a href="">Now Live</a> </button>
                <button className="flashSale-btn2"> <a href="">Tomorrow Sale</a> </button>
                </div>
                <div className="FlashSale-time">
                <FlashSaleTime
                    countdownTimestampMs={10335686000000}/>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default FlashSaleTab;