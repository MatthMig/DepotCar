import React, { useEffect, useState } from "react";
import client from '../sanityClient'; // Import the Sanity client
import withPreloader from '../withPreloader';
import ProductThumbnail from "./ProductThumbnail";

function Products() {
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        // Fetch data from Sanity
        client
            .fetch('*[_type == "car"]') // Query all documents of type "car"
            .then((data) => setProductsData(data))
            .catch(() => setProductsData([]));
    }, []);

    return (
        <section className="GreyBG">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title text-center">
                            <h2>Notre offre<small>Lorem ipsum dolor sit amet.</small></h2>
                        </div>
                    </div>
                    {productsData.map((product) => (
                        <ProductThumbnail
                            key={product._id}
                            {...product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default withPreloader(Products);
