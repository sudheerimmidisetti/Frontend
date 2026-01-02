import React from "react";

import myImage from "./assets/react.svg"
// import "./FunctionComponent.css"
const FunctionComponent = (props) => {
    // return (
    //     <h1>Function - Component</h1>
    // );

    // var myCards = [
    //     {
    //         "image": myImage,
    //         "price": 200,
    //         "brand": "UPSA" 
    //     },
    //     {
    //         "image": myImage,
    //         "price": 50000,
    //         "brand": "T-HUB" 
    //     },
    //     {
    //         "image": myImage,
    //         "price": 1900,
    //         "brand": "Rare Rabbit" 
    //     },
    //     {
    //         "image": myImage,
    //         "price": 30000,
    //         "brand": "Aditya" 
    //     }
    // ]
    
    return (
        <div className="card">
            <div className="logo">
                <img src={props.card.image} alt="" />
            </div>
            <div className="info">
                <span>Price : ${props.card.price}/-</span><br />
                <span>Brand : {props.card.brand}</span>
            </div>
        </div>
    )
}

export default FunctionComponent;