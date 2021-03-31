import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Products from "../Products/Products";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <Container>
            <Row>
                {products.map((product) => (
                    <Products product={product} key={product._id}></Products>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
