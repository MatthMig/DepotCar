import React, { useState } from "react";
import { Form } from 'react-bootstrap';
import productsData from '../cars.json';
import ProductThumbnail from "../components/ProductThumbnail";
import withPreloader from '../withPreloader';

function CarsPage() {
    // State variables to manage selected options
    const [conditionFilter, setConditionFilter] = useState("");
    const [transmissionFilter, setTransmissionFilter] = useState("");

    // Filtered products based on selected options
    const filteredProducts = productsData.filter(product => {
        // Filter by condition if conditionFilter is not empty
        let product_Condition = product.Condition;
        if(product_Condition === "Neuve"){
            product_Condition = "Neuf";
        }
        if (conditionFilter && product_Condition !== conditionFilter) {
            return false;
        }
        // Filter by transmission if transmissionFilter is not empty
        if (transmissionFilter && product.TransmissionType !== transmissionFilter) {
            return false;
        }
        return true;
    });

    // Event handler to update conditionFilter state
    const handleConditionChange = (e) => {
        setConditionFilter(e.target.value);
    };

    // Event handler to update transmissionFilter state
    const handleTransmissionChange = (e) => {
        setTransmissionFilter(e.target.value);
    };

    return (
        <>
            <section className="section-background">
                <div className="container">
                    <div className="row">
                        <div className="search-tool">
                            <form action="#">
                                <div className="form-group">
                                    <label>Neuf/Occasion:</label>
                                    <Form.Select onChange={handleConditionChange}>
                                        <option value="">--Tout--</option>
                                        <option value="Neuf">Neuf</option>
                                        <option value="Occasion">Occasion</option>
                                    </Form.Select>
                                </div>

                                <div className="form-group">
                                    <label>Transmission:</label>
                                    <Form.Select onChange={handleTransmissionChange}>
                                        <option value="">--Tout--</option>
                                        <option value="Automatique">Automatique</option>
                                        <option value="Manuelle">Manuelle</option>
                                    </Form.Select>
                                </div>

                                {/*<button type="submit" className="section-btn btn btn-primary btn-block">Search</button>*/}
                            </form>
                        </div>
                        {filteredProducts.map((product, index) => (
                            <ProductThumbnail
                                key={index}
                                {...product}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default withPreloader(CarsPage);
