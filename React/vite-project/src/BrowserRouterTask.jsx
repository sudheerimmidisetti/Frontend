import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import PageNotFound from "./PageNotFound";

function BrowserRoutingTask() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services/" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default BrowserRoutingTask;