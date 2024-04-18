import React from "react";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import HomeSlider from "../components/HomeSlider";
import Products from "../components/Products";
import withPreloader from '../withPreloader';

function HomePage() {
    return (
        <>
            <HomeSlider />
            <main>
                <AboutUs />
                <Products />
            </main>
            <Contact />
        </>
    );
}

export default withPreloader(HomePage);