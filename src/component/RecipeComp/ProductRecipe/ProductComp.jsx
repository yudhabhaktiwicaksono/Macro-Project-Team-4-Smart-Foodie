import React from "react";
import NavComp from "../NavbarComp";
import Product from "./Product";
import "./ProductComp.css";

const ProductComp = () =>{
    return(

        <>
       <nav><NavComp/></nav>
       <div id="Product">
        <Product/>
       </div>
        </>
    )
}

export default ProductComp;