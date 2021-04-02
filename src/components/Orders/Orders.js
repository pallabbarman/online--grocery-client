import React, { useContext, useEffect, useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import { UserContext } from "../../App";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.email);
    useEffect(() => {
        fetch(
            "https://web-online-grocery.herokuapp.com/orders?email=" +
                loggedInUser.email
        )
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((err) => console.log(err));
    }, [loggedInUser.email]);

    return (
        <div className="mt-5 container">
            <h1 style={{ textAlign: "center" }}>Your orders here</h1>
            <br />
            <br />
            <div className="d-flex justify-content-between">
                <h4>Email Address</h4>
                <h4>Product Name</h4>
                <h4>Price</h4>
                <h4>Wight</h4>
                <h4>Date</h4>
            </div>
            <hr />
            {orders.map((order) => (
                <OrderDetails key={order._id} order={order}></OrderDetails>
            ))}
        </div>
    );
};

export default Orders;
