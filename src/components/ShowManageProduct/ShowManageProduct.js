import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ShowManageProduct = (props) => {
    console.log(props);
    const { pd } = props;
    const { name, wight, price } = pd;
    return (
        <Container className="mt-5">
            <div className="d-flex justify-content-between">
                <p>{name}</p>
                <p>{wight}</p>
                <p>{price}</p>
                <p><FontAwesomeIcon icon={faTrashAlt} /></p>
            </div>
        </Container>
    );
};

export default ShowManageProduct;
