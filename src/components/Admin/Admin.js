import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
    return (
        <div className="mt-5">
            <div className="sidebar">
                <Container>
                    <Link to="/addProducts">Add Product</Link>
                    <Link to="/manageProduct">Manage Product</Link>
                </Container>
            </div>
            <Container>
                <h1 style={{ textAlign: "center", marginTop: "50px" }}>
                    Welcome Admin
                </h1>
            </Container>
        </div>
    );
};

export default Admin;
