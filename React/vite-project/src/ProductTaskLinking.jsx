import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductCards from "./ProductCards.jsx";
import ProductInfo from "./ProductInfo.jsx";
export default function ProductCardLinking() {

  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductCards/>}/>
        <Route path="/productinfo/:id" element={<ProductInfo/>}/>

      </Routes>
    </BrowserRouter>
  </>
  );
}