import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const { serviceId } = useParams()
    const [data, setData] = useState()
    useEffect(() => {
        fetch('/myServices.json')
            .then(res => res.json())
            .then(data => setData(data.find(data => +serviceId === data.id)))
    }, [serviceId])

    return (
        <div className="bg-info">
            <Card style={{ width: '33rem' }} className="mx-auto details-bg">
                <Card.Img variant="top" className="img-fluid p-2" src={data?.img} />
                <Card.Body>
                    <Card.Title>{data?.name}</Card.Title>
                    <Card.Text>
                        {data?.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Ward no: {data?.ward}</ListGroupItem>
                    <ListGroupItem>{data?.vacancy} Beds Available</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Link className="links-style" to="/home">Back to Home</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Details;