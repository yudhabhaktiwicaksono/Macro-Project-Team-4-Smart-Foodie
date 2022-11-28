import React from "react";
import "./FlashSaleCard.css";
import bawang  from './images/brown-onion.png';

const FlashSaleCard2 = (props) =>{
    

    return (
        <div className="card-wrapper">
            <div className="img-thumb">
                <img src={bawang} alt="" />
            </div>
            <div className="content">
            <p className="title">Brows Onion</p>
            <p className="rating">⭐⭐⭐</p>
            <p className="desc">Rp. 20.000</p>
            <div className="content2">
                <img src={props.status} alt="" />
            </div>
            </div>
            
        </div>
    )
}

export default FlashSaleCard2;
