import React, {Component,Fragment} from "react";
import CardProduk from "./CardProduk/CardProduk";
import "./Produk.css";

class Produk extends Component{
    state = {
        order : 0
    }

    tambah = (newValue) =>{
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <div className="header">
                    
                    <div className="troli">
                        <img src="" alt="" />
                    </div>
                </div>
              <CardProduk tambah={(value)=> this.tambah(value)} />
            </Fragment>
        )
    }
}

export default Produk;