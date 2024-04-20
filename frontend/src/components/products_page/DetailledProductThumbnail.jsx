import React from "react";
import DetailledProductDescription from "./DetailledProductDescription";
import urlFor from "/src/imageUrlBuilder"; // Import the urlFor function

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
                    <img src={urlFor(images[0]).url()} alt="" className="img-fluid wc-image" /> {/* Generate image URL */}
                </div>
                <br />
                {imageChunks.map((chunk, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {chunk.map((image, index) => (
                            <div className="col-sm-4 col-xs-6" key={index}>
                                <div>
                                    <img src={urlFor(image).width(300).url()} alt="" className="img-fluid" /> {/* Generate image URL */}
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
