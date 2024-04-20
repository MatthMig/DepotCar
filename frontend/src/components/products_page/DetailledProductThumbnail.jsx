import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import DetailledProductDescription from "./DetailledProductDescription";

function DetailledProductThumbnail({ images, title, price, oldPrice, data }) {
    return (
        <div className="row">
            <div className="col-md-6 col-xs-12">
                <div>
                    <OwlCarousel 
                        className="owl-theme"
                        loop
                        items={1} 
                    >
                        {images.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt="" className="img-fluid wc-image" />
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </div>
            <div className="col-md-6 col-xs-12">
                <DetailledProductDescription
                    title={title}
                    price={price}
                    oldPrice={oldPrice}
                    data={data}
                />
            </div>
        </div>
    );
}

export default DetailledProductThumbnail;
