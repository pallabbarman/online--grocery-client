import React from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Products.css";

const Products = (props) => {
    const { product } = props;
    const { _id, name, imageURL, price } = product;
    console.log(product);
    return (
        <Col md={4} className="d-flex justify-content-center">
            <Card className="product-card">
                <Card.Img className="product-img" src={imageURL} />
                <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                        {name}
                    </Card.Title>
                    <br />
                    <Row style={{ padding: "3px", margin: "3px" }}>
                        <Col md={6}>
                            <h5>$ {price}</h5>
                        </Col>
                        <Col md={6}>
                            <Button
                                variant="outline-primary"
                                as={Link}
                                to={`checkout/${_id}`}
                            >
                                Buy Now
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Products;
