import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

const AddProduct = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set("key", "555922d12c83f7e7b50176857a2e2eec");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onSubmit = (data) => {
        const productData = {
            name: data.name,
            imageURL: imageURL,
            price: data.price,
            wight: data.wight,
        };

        const url = `https://web-online-grocery.herokuapp.com/addProduct`;

        console.log(productData);
        fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(productData),
        }).then((res) => console.log("Response", res));
    };

    return (
        <div className="mt-5">
            <div className="sidebar">
                <Link to="/addProducts">Add Product</Link>
                <Link to="/manageProduct">Manage Product</Link>
            </div>
            <div className="content">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Container style={{ marginTop: "60px" }}>
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
                                    name="price"
                                    className="form-control"
                                    placeholder="Enter Price"
                                    ref={register}
                                    required
                                />
                            </Col>
                            <Col md={6} style={{ marginTop: "30px" }}>
                                <h5>Wight</h5>
                                <input
                                    name="wight"
                                    className="form-control"
                                    placeholder="Enter Wight"
                                    ref={register}
                                />
                            </Col>
                            <Col md={6} style={{ marginTop: "30px" }}>
                                <h5>Add Photo</h5>
                                <input
                                    name="exampleRequired"
                                    type="file"
                                    onChange={handleImageUpload}
                                    required
                                />
                                {errors.exampleRequired && (
                                    <span>This field is required</span>
                                )}
                            </Col>
                            <Col
                                style={{
                                    marginTop: "50px",
                                    textAlign: "end",
                                }}
                            >
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
