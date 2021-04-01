import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowManageProduct from "../ShowManageProduct/ShowManageProduct";

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    console.log(products.map((pd) => pd));

    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className="mt-5">
            <div className="sidebar">
                <Link to="/addProducts">Add Product</Link>
                <Link to="/manageProduct">Manage Product</Link>
            </div>
            <div className="content mt-5">
                <div className="d-flex justify-content-between container mt-5">
                    <h4>Name</h4>
                    <h4>Wight</h4>
                    <h4>Price</h4>
                    <h4>Action</h4>
                </div>
                {products.map((pd) => (
                    <ShowManageProduct pd={pd}></ShowManageProduct>
                ))}
            </div>
        </div>
    );
};

export default ManageProduct;
