import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import "./Checkout.css";

const CheckOut = () => {
    const { _id } = useParams();
    console.log(_id);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${_id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => alert("Somethings went wrong! Please try again!"));
    }, [_id]);

    const checkOutProduct = product.find(
        (pd) => parseInt(pd._id) === parseInt(_id)
    );
    console.log(checkOutProduct);

    return (
        <Container className="checkout">
            <div className="d-flex justify-content-between">
                <h2>Name</h2>
                <h2>Quantity</h2>
                <h2>Price</h2>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <h4>{checkOutProduct?.name}</h4>
                <h4>1</h4>
                <h4>$ {checkOutProduct?.price}</h4>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <h4>Total Price</h4>
                <h4>$ {checkOutProduct?.price}</h4>
            </div>
            <br />
            <Button variant="outline-primary">
                Checkout
            </Button>
        </Container>
    );
};

export default CheckOut;
