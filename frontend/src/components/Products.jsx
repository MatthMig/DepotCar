import React from "react";
import productsData from '../cars.json';
import withPreloader from '../withPreloader';
import ProductThumbnail from "./ProductThumbnail";

function Products() {
    return (
        <section className="GreyBG">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="section-title text-center">
                            <h2>Notre offre<small>Lorem ipsum dolor sit amet.</small></h2>
                        </div>
                    </div>
                    {productsData.map((product, index) => (
                        <ProductThumbnail
                            key={index}
                            {...product}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default withPreloader(Products);