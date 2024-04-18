import React from "react";

function DetailledProductDescription({ title, price, oldPrice, data }) {
    const labelMappings = {
        HorsePower: 'Chevaux',
        CC: 'CC',
        TransmissionType: 'Type de transmission',
        Fuel: 'Carburant',
        Year: 'Année',
        Condition: 'État',
    };

    return (
        <form action="#" method="post" className="form">
            <h2>{title}</h2>
            <p className="lead">
                {oldPrice ? <small><del>{oldPrice}€</del> </small> : null}
                <strong className="text-primary">{price}€</strong>
            </p>

            <div className="row">
                {Object.entries(data).map(([label, value], index) => (
                    <div className="col-md-4 col-sm-6" key={index}>
                        <p>
                            <span>{labelMappings[label] || label}</span>
                            <br />
                            <strong>{value}</strong>
                        </p>
                    </div>
                ))}
            </div>
        </form>
    );
}

export default DetailledProductDescription;
