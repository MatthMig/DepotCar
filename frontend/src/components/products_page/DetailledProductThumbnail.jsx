import React from "react";
import DetailledProductDescription from "./DetailledProductDescription";

function DetailledProductThumbnail({ images, title, price, oldPrice, data }) {
    // Function to chunk the images array into groups of 3
    const chunkArray = (arr, size) => {
        return arr.reduce((chunks, el, i) => {
            if (i % size === 0) {
                chunks.push([el]);
            } else {
                chunks[chunks.length - 1].push(el);
            }
            return chunks;
        }, []);
    };

    // Chunk the images array into groups of 3
    const imageChunks = chunkArray(images.slice(1), 3);

    return (
        <div className="row">
            <div className="col-md-6 col-xs-12">
                <div>
                    <img src={images[0]} alt="" className="img-fluid wc-image" />
                </div>
                <br />
                {imageChunks.map((chunk, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {chunk.map((image, index) => (
                            <div className="col-sm-4 col-xs-6" key={index}>
                                <div>
                                    <img src={image} alt="" className="img-fluid" />
                                </div>
                                <br />
                            </div>
                        ))}
                    </div>
                ))}
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
