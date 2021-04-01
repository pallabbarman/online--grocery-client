import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Products from "../Products/Products";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://web-online-grocery.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <Container className="mt-5">
            <div className="text-center" style={{ fontSize: "200px" }}>
                {products.length === 0 && (
                    <Spinner animation="grow" variant="warning" />
                )}
            </div>
            <Row>
                {products.map((product) => (
                    <Products product={product} key={product._id}></Products>
                ))}
            </Row>
        </Container>
    );
};

export default Home;
