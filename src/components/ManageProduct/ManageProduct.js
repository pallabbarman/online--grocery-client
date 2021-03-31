import React from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    return (
        <>
            <div className="sidenav">
                <Link to="/addProduct">Add Product</Link>
                <Link to="/manageProduct">Manage Product</Link>
            </div>
            <div className="main">
                <h1>Manage Product</h1>
            </div>
        </>
    );
};

export default ManageProduct;