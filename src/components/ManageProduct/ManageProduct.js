import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShowManageProduct from "../ShowManageProduct/ShowManageProduct";

const ManageProduct = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://web-online-grocery.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
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
                    <h4>Wight (kg)</h4>
                    <h4>Price</h4>
                    <h4>Action</h4>
                </div>
                <hr />
                {products.map((pd) => (
                    <ShowManageProduct pd={pd} key={pd._id}></ShowManageProduct>
                ))}
            </div>
        </div>
    );
};

export default ManageProduct;
