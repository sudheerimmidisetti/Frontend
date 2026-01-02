import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
export default function ProductInfo() {
    const Data=[
        {id:1, name:"Laptop", brand:"Hp",price:50000, description:"This is a good laptop", specialization:"Gaming"},
        {id:2, name:"Mobile", brand:"Samsung", price:20000, description:"This is a good mobile", specialization:"Camera"},
        {id:3, name:"Tablet", brand:"Apple",price:30000, description:"This is a good tablet", specialization:"Display"},
    ]

    const ReceivedData = useParams();
    console.log(ReceivedData);

    const [mycard, setMycard] = useState([null]);
    useEffect(()=>{
        const filterData = Data.filter((item)=>item.id==parseInt(ReceivedData.id));
        setMycard(filterData);
    },[]);

    return (
        <>
            <h1>Product Info</h1>
            {
                Data.filter((item)=>item.id==ReceivedData.id).map((item)=>(
                    <div key={item.id} style={{color:"black"}}>
                        <h2>Name: {item.name}</h2>
                        <h2>Brand: {item.brand}</h2>
                        <h3>Price: {item.price}</h3>
                        <p>Description: {item.description}</p>
                        <p>Specialization:{item.specialization}</p>
                        <a href="/">Go Back</a>
                    </div>
                ))
            }
        </>
    );
}