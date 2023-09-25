import React from 'react';
import { Route, Routes } from "react-router-dom";
//Components
import Home from "./component/Home";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import About from "./component/About";
import Work from "./component/Work";
import Contact from "./component/Contact";

const App = () => {
    return (
        <>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/work" element={<Work />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;