import React from "react";
import "./Product.css";
import noodle from "./images/noodle.png"; 
import save from './images/save.png';
import share from './images/share.png';
import shopping from './images/shopping.png';
import Footer from "../../footerComponent/Footer";
const Product = () =>{

 const   HeaderStyle={
        maxWidth:'550px',
        
    };

    return (
       
        <>
        <div className="containerProduct">
            <div className="img-product">
                <img src={noodle} alt="" />
            </div>
            <div className="btn-product">
                <button className="btn-save"><a href=""> <img src={save} alt="" /> Save Recipe</a></button>
                <button className="btn-share"><a href=""> <img src={share} alt="" /> Share</a></button>
                <button className="btn-recipe"><a href=""> <img src={shopping} alt="" /> Recipe Shopping</a></button>

                <div className="difculty">
                <p>Duration : 50 Minute</p>
                <p>Difficulties : Easy</p>
                <p>Satisfaction</p>
            </div>
            </div>
        </div>
        <h1 style={HeaderStyle} align="center">Chicken Noodles</h1>
        <div className="ingredienst">
            <table border="3px solid black" cellSpacing={0}>
                <tr>
                    <th>Ingredients</th>
                </tr>
                <tr>
                    <td >Mie Kuning 150gr</td>
                </tr>
                <tr>
                    <td>Kangkung 1 ikat</td>
                </tr>
                <tr>
                    <td>Daun Salam 3 lembar</td>
                </tr>
                <tr>
                    <td>Gula 1/2 sdt</td>
                </tr>
                <tr>
                    <td>Daun Bawang 1 batang</td>
                </tr>
                <tr>
                    <td>Lengkuas</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
            </table>
        </div>


        <div className="Seasoning">
            <table border="3px solid black" cellSpacing={0}>
                <tr>
                    <th>Seasoning</th>
                </tr>
                <tr>
                    <td >Bawang Putih</td>
                </tr>
                <tr>
                    <td>Cabai merah besar</td>
                </tr>
                <tr>
                    <td>Cabai merah keriting</td>
                </tr>
                <tr>
                    <td>Cabai Rawit Merah</td>
                </tr>
                <tr>
                    <td>Ebi</td>
                </tr>
                <tr>
                    <td>Lengkuas</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
                <tr>
                    <td>Mie Kuning</td>
                </tr>
            </table>
        </div>
        <div className="footer">
            <footer>
                <Footer/>
            </footer>
        </div>
        </>

    )

}

export default Product;