import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";

const AddProduct = () => {
    const { register, handleSubmit, errors } = useForm();

    return (
        <div>
            <div className="sidenav">
                <Link to="/addProduct">Add Product</Link>
                <Link to="/manageProduct">Manage Product</Link>
            </div>
            <div className="main">
                <form onSubmit={handleSubmit()}>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <h5>Product Name</h5>
                                <input
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    ref={register}
                                    required
                                />
                            </Col>
                            <Col md={6}>
                                <h5>Add Price</h5>
                                <input
                                    name="name"
                                    className="form-control"
                                    placeholder="Enter Price"
                                    required
                                    ref={register}
                                />
                            </Col>
                            <Col md={6} style={{ marginTop: "30px" }}>
                                <h5>Add Photo</h5>
                                <input
                                    name="exampleRequired"
                                    type="file"
                                    required
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                            </Col>
                            <br />
                            <br />
                            <Col md={6} style={{ marginTop: "60px" }}>
                                <input type="submit" />
                            </Col>
                        </Row>
                    </Container>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
