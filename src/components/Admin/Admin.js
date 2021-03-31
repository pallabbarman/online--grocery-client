import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
    return (
        <div className="sidebar">
            <Container>
                <Link to="/addProducts">Add Product</Link>
                <Link to="/manageProduct">Manage Product</Link>
            </Container>
        </div>
    );
};

export default Admin;
