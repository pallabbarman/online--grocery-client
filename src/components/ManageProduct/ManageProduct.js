import React from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = () => {
    return (
        <>
            <div className="sidebar">
                <Link to="/addProducts">Add Product</Link>
                <Link to="/manageProduct">Manage Product</Link>
            </div>
            <div className="content">
                <h1>Manage Product</h1>
            </div>
        </>
    );
};

export default ManageProduct;