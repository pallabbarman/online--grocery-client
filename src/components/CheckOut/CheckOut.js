import React, { useContext, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import "./Checkout.css";

const CheckOut = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${_id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [_id]);

    const checkOutProduct = product.find(
        (pd) => parseInt(pd._id) === parseInt(_id)
    );

    const handleOrder = () => {
        const newOrder = {
            ...loggedInUser,
            name: checkOutProduct?.name,
            price: checkOutProduct?.price,
            image: checkOutProduct?.imageURL,
            wight: checkOutProduct?.wight,
            orderTime: new Date(),
        };
        fetch("http://localhost:5000/addOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                alert("Your products ordered successfully");
            });
    };

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
            <Button onClick={handleOrder} variant="outline-primary">
                Checkout
            </Button>
        </Container>
    );
};

export default CheckOut;
