import { faCog, faCube, faDashboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import urlFor from '../imageUrlBuilder';

function ProductThumbnail({ _id, images, title, oldPrice, Price,
    HorsePower, CC, TransmissionType, Fuel, Year, Condition }) {
    const productUrl = `/product/${_id}`;
    const main_image = images[0];

    return (
        <div className="col-md-4 col-sm-4">
            <div className="courses-thumb courses-thumb-secondary">
                <div className="courses-top">
                    <div className="courses-image">
                        <img src={urlFor(main_image).width(300).url()} className="img-fluid" alt={title} /> {/* Generate image URL */}
                    </div>
                    <div className="courses-date">
                        <span title="Author">
                            <FontAwesomeIcon icon={faDashboard} /> {HorsePower} CH
                        </span>
                        <span title="Author">
                            <FontAwesomeIcon icon={faCube} /> {CC}cc
                        </span>
                        <span title="Views">
                            <FontAwesomeIcon icon={faCog} /> {TransmissionType}
                        </span>
                    </div>
                </div>

                <div className="courses-detail">
                    <h3><Link to={productUrl}>{title}</Link></h3>

                    <p className="lead">
                        {oldPrice ? <small><del>{oldPrice} €</del></small> : null} <strong>{Price} €</strong>
                    </p>

                    <p>{HorsePower} hp &nbsp;&nbsp;/&nbsp;&nbsp; {Fuel} &nbsp;&nbsp;/&nbsp;&nbsp;
                        {Year} &nbsp;&nbsp;/&nbsp;&nbsp; <br />{Condition}</p>
                </div>

                <div className="courses-info">
                    <Link to={productUrl} className="section-btn btn btn-primary btn-block">Voir Plus</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductThumbnail;
