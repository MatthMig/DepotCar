import React from "react";
import { Card } from 'react-bootstrap';

function VehicleDescription({ description }) {
    const paragraphs = description.split('\n').map((paragraph, index) => (
        <span key={index}>{paragraph}<br/></span>
    ));

    return (
        <div >
            <Card className="panel">
                <Card.Header>
                    <h4>
                        Description du véhicule
                    </h4>
                </Card.Header>
                <Card.Body>
                    <p>
                        {paragraphs}
                    </p>
                </Card.Body>
            </Card>
        </div>
    );
}

export default VehicleDescription;
