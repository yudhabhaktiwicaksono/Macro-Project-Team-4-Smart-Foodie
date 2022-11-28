import React from "react";
import "./OrderTab.css";


const OrderTab = () =>{

    return (

        <>
       
        <div className="tabs">
            <div className="tab">
            <button className="btn-tab"> <a href=""> All Transaction </a></button>
            <button className="btn-tab"> <a href=""> On Process </a></button>
            <button className="btn-tab"> <a href=""> Completed </a></button>
            <button className="btn-tab"> <a href=""> Canceled </a></button>
            </div>
            
        </div>
        
        
        </>
    )
}

export default OrderTab