import React from "react";
import Contact from "../components/Contact";
import withPreloader from '../withPreloader';

function ContactUsPage() {
    return (
        <>
            <Contact />
        </>
    );
}

export default withPreloader(ContactUsPage);