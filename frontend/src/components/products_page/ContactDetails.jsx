import React from 'react';
import { Card } from 'react-bootstrap';

function ContactDetails({ name, phone, mobilePhone, email }) {
    return (
        <div >
            <Card>
                <Card.Header>
                    <h4>
                        Contact
                    </h4>
                </Card.Header>
                <Card.Body>
                    <p>
                        <span>Nom</span>
                        <br />
                        <strong>{name}</strong>
                    </p>
                    <p>
                        <span>Tél. fixe</span>
                        <br />
                        <strong><a href={`tel:${phone}`}>{phone}</a></strong>
                    </p>
                    <p>
                        <span>Tél. mobile</span>
                        <br />
                        <strong><a href={`tel:${mobilePhone}`}>{mobilePhone}</a></strong>
                    </p>
                    <p>
                        <span>Email</span>
                        <br />
                        <strong><a href={`mailto:${email}`}>{email}</a></strong>
                    </p>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ContactDetails;
