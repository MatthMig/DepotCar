import React from 'react';
import { Link } from 'react-router-dom';

function ProductThumbnail({ id, images, title, oldPrice, Price,
    HorsePower, CC, TransmissionType, Fuel, Year, Condition }) {
    const productUrl = `/product/${id}`;
    const main_image = images[0];
    return (
        <div className="col-md-4 col-sm-4">
            <div className="courses-thumb courses-thumb-secondary">
                <div className="courses-top">
                    <div className="courses-image">
                        <img src={main_image} className="img-fluid" alt={title} />
                    </div>
                    <div className="courses-date">
                        <span title="Author"><i className="fa fa-dashboard"></i> {HorsePower} CH</span>
                        <span title="Author"><i className="fa fa-cube"></i> {CC}cc</span>
                        <span title="Views"><i className="fa fa-cog"></i> {TransmissionType}</span>
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
