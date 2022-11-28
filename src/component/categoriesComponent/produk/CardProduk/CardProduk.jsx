import React, {Component} from "react";
import bayam from "./images/bayam.png";

class CardProduk extends Component{
    state = {
        order : 0
    }

    


    tambah = (newValue) => {
        this.props.tambah(newValue);
    }



    handlePlus = () =>{
       this.setState({
        order: this.state.order + 1
       }, ()=> {
        this.tambah(this.state.order);
       })
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
               })
        }
    }
    render() {
        return (

            <>  
                <div id="product-container">
                    <div id="product-cards">
                <div className="card-product">
                <div className="img-thumb-prod">
                    <img src={bayam} alt="bayam" />
                <div className="product-price">
                <p className="produk-price"> <span>Now Only</span> Rp.34.000</p>
                </div>
                </div>
                </div>
            <div className="detail-product">
                <h1>Romaine Letuce</h1>
                <h5>Despcription Product</h5>
                <p>
                Romaine lettuce has a very refreshing and juicy taste. It's very crisp, and the taste is a bit bitter, though not too much.
                </p>
                <h5>Product Weight</h5>
                <div className="product-weight">
                <button className="btn-weight">100g</button>
                <button className="btn-weight">250g</button>
                <button className="btn-weight">500g</button>
                <button className="btn-weight">1000g</button>
                </div>
            </div>
            <div className="counter">
                <button className="minus" onClick={this.handleMinus}>-</button>
                <input type="text" value={this.state.order} />
                <button className="plus" onClick={this.handlePlus}>+</button>
                <div className="counter2">
                    <button className="btn-cart">Add To Cart</button>
                    <button className="btn-check">Check Out</button>
                </div>
            </div>
            </div>
            </div>
           
            

            </>
            
        )
    }
}

export default CardProduk;