import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cardhomepade(props) {

    const {title,imgURL,testsomeone} = props

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={imgURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {testsomeone}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
