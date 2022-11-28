import React from "react";
import { PRODUCT } from "../../router";
import "./LatiesComponent.css";
const Recipes = (props) =>{

    const contentStyle ={
        position: 'relative',
        bottom: '5px',
        width: '234px',
        height: '190px',
        backgroundColor: '#F8F8F8',
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
    };

    const imgStyle = {
        width:'100%',
    };

    const cardStyle = {
        overFlow:'hidden',
        position:'relative',
        width: '234px',
        height: '150px',
    }

    const titleStyle = {
        fontSize: '20px',
        fontWeight: '600',
        textTransform: 'capitalize',
        position:'relative',
        color: '#2d2d2d',
    };
    

    const descStyle = {
        fontSize: '12px',
        color: '#999',
        margin: '0',
    }


    return(
        <>
       
        <div className="card-wrapper">
            <div style={cardStyle}>
                <img style={imgStyle} src={props.img} alt="" />
            </div>
            <div style={contentStyle}>
            <p align="center" style={titleStyle}>{props.name}</p>
            <p style={descStyle}>Hai Guys, our new recipe is out. This is for you that loves potatoes and ......</p>
            <div className="readme">
                <a href={PRODUCT}>Read More ❱ </a>
            </div>
            </div>
        </div>
        </>
    )
}

export default Recipes;