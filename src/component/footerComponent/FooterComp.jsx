import React from "react";
import "./FooterComp.css";
import logo1 from "./images/logo1.png";
import logo2 from "./images/logo2.png";
import logo3 from "./images/logo3.png";
import logo4 from "./images/logo4.png";
import logo5 from "./images/logo5.png";
import costumer from "./images/costumer.png";






const FooterComp = () =>{
    



    return (
        <>
        <div id="content">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
        </div>
        <div className="costumer">
            <a href=""><img src={costumer} alt="" /></a>
        </div>
           
        </>
    )
}

export default FooterComp;