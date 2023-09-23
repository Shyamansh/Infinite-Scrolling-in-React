import React from "react";
import { Modal, Button } from "react-bootstrap"; // Assuming you use Bootstrap for modals

const ProductDetails = ({ product, onClose }) => {
    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Product Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={product.thumbnail} alt="thumbnail" />
                <p>Description: {product.description}</p>
                <p>Price: $ {product.price}</p>
                {/* Add more product details here */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductDetails;
