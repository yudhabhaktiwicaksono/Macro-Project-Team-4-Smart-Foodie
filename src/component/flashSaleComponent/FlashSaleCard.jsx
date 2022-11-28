import React from "react";
import "./FlashSaleCard.css";
import bawang  from './images/brown-onion.png';
import troli from './images/troli.png';
import like from './images/like.png';
const FlashSaleCard = (props) =>{
    

    return (
        <div className="card-wrapper">
            <div className="img-thumb">
                <img src={props.img} alt="" />
            </div>
            <div className="content">
            <p className="title">{props.name}</p>
            <p className="rating">⭐⭐⭐</p>
            <p className="desc">Rp. 20.000</p>
            <div className="content2">
                <a href=""><img src={troli} alt="" /></a>
                 <a href=""><img src={like} alt="" /></a>
            </div>
            </div>
            
        </div>
    )
}

export default FlashSaleCard;
