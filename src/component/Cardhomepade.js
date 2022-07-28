import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dataclassrooms from '../Data/fourClass';
export default function Cardhomepade(props) {



    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={dataclassrooms.imgURL} />
            <Card.Body>
                <Card.Title>{dataclassrooms.title}</Card.Title>
                <Card.Text>
                    {dataclassrooms.testsomeome}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
