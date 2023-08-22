import React from 'react'
import Home from './Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import Cousine from './Cuisine';
import { AnimatePresence } from 'framer-motion';
import Searched from './Searched';
import Recipe from './Recipe';
import NoRoute from '../components/NoRoute';


function Pages() {
    const location = useLocation();
    return (
        <div>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/cuisine/:type" element={<Cousine />} />
                    <Route path='/searched/:search' element={<Searched />} />
                    <Route path="/recipe/:name" element={<Recipe />} />
                    {/* <Route path="*" element={<NoRoute />} /> */}
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default Pages;