import React from "react";
import AboutUs from "../components/AboutUs";
import withPreloader from '../withPreloader';

function AboutUsPage() {
    return (
        <>
            <AboutUs />
        </>
    );
}

export default withPreloader(AboutUsPage);