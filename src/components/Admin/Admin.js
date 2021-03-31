import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
    return (
        <div className="sidenav">
            <Link to="/addProduct">Add Product</Link>
            <Link to="/manageProduct">Manage Product</Link>
        </div>
    );
};

export default Admin;
