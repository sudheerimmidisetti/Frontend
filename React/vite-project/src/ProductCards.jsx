import React from "react";
import { Link } from "react-router-dom";
import './ProductCards.css';

export default function ProductCards() {
    const Data = [
        { id: 1, name: "Laptop", brand: "Hp", price: 50000 },
        { id: 2, name: "Mobile", brand: "Samsung", price: 20000 },
        { id: 3, name: "Tablet", brand: "Apple", price: 30000 },
    ];

    return (
        <>
            <h1>Product Cards</h1>
            {
                Data.map((item) => (
                    <div key={item.id} className="product-card">
                        <h2>Product Name: {item.name}</h2>
                        <h2>Product Brand: {item.brand}</h2>
                        <h3>Product Price: ₹{item.price}</h3>
                        <Link to={`/productinfo/${item.id}`}>View Details</Link>
                    </div>
                ))
            }
        </>
    );
}
