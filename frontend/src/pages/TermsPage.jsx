import React from "react";
import Terms from "../components/Terms";
import withPreloader from '../withPreloader';

function TermsPage() {
    return (
        <>
            <Terms />
        </>
    );
}

export default withPreloader(TermsPage);