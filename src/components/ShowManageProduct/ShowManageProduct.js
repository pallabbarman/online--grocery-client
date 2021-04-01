import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ShowManageProduct = (props) => {
    const { pd } = props;
    const { _id, name, wight, price } = pd;

    const deleteProduct = (_id) => {
        fetch(`http://localhost:5000/delete/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => console.log("delete", data));
    };
    return (
        <Container className="mt-5">
            <div className="d-flex justify-content-between">
                <p>{name}</p>
                <p>{wight}</p>
                <p>{price}</p>
                <p onClick={() => deleteProduct(_id)}>
                    <FontAwesomeIcon icon={faTrashAlt} />
                </p>
            </div>
        </Container>
    );
};

export default ShowManageProduct;
