import React from "react";
import "./OrderCard.css";
import strawberry from "./images/strawberry.png";


const OrderCard = () =>{

    return (

        <>
        
        <div className="card-container">
            <div className="card-order">
                <div className="card-component">
                    <div className="order-img">
                        <img src={strawberry} alt="" />
                    </div>
                    <div className="title-container">
                    <div className="order-title">
                        <h5>Europe Strawberry</h5>
                        <p>Weight : 500g</p>
                        <p>x3</p>
                        <p>price : <span>Rp.75.000</span></p>
                    </div>
                    <div className="order-title2">
                        <p>Total Price : <span>Rp.80.000</span></p>
                    </div>
                    </div>
                </div>
                <div className="card-component2">
                <div className="order-transaksi">
                        <p>Complete</p>
                        <div className="btn">
                        <button className="btn-transaksi"> <a href="">Repuchase</a> </button>
                        <button className="btn-transaksi"> <a href="">Rate</a></button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        
        </>



    )

}

export default OrderCard;