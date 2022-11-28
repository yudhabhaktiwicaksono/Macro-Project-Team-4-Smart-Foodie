import React from "react";
import "./CategoriesComp.css";
import sayur from "./images/sayur.png";
import protein from "./images/protein.png";
import herbs from "./images/herbs.png";
import fruits from "./images/fruits.png";
const CategoriesComp = () =>{
    

    const proteinStyle ={
        width:'400px',
    };

    const herbsStyle ={
        width:'400px',
    };

    
    return(
        <>
        <div className="wrapper">
            <div className="header">
                <h1>Categories</h1>
                <h2>On Populer Categories</h2>
                <button>View All Categories</button>
            </div>
            <div className="content-sayur">
                   <table align="center" >
                    <tr>
                        <td rowSpan={2}><a href=""><img className="sayur" src={sayur} alt="" /></a></td>
                        <td><a href=""><img style={proteinStyle} src={protein} alt="" /></a></td>
                        <td><a href=""><img style={herbsStyle} src={herbs} alt="" /></a></td>
                    </tr>
                    <tr>
                    <td colSpan={10}> <a href=""> <img className="fruit" src={fruits} alt="" /></a></td>
                    </tr>
                   </table>
                
            </div>
        </div>
        </>
    )
}

export default CategoriesComp;