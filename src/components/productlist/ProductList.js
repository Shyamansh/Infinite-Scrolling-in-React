import React, { useEffect, useRef, useState } from "react";
import { Card, Row, Col, Button, Modal } from "react-bootstrap";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const elementRef = useRef(null);

    function onIntersection(entries) {
        const firstEntry = entries[0];
        if (firstEntry.isIntersecting && hasMore) {
            fetchMoreItems();
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(onIntersection);
        if (observer && elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [products]);

    async function fetchMoreItems() {
        const response = await fetch(
            `https://dummyjson.com/products?limit=10&skip=${page * 10}`
        );

        const data = await response.json();

        if (data.products.length === 0) {
            setHasMore(false);
        } else {
            setProducts((prevProducts) => [...prevProducts, ...data.products]);
            setPage((prevPage) => prevPage + 1);
        }
    }

    function handleCardClick(product) {
        setSelectedProduct(product);
        setShowModal(true);
    }

    function handleCloseModal() {
        setShowModal(false);
    }

    return (
        <>
            {products.map((item) => (
                <Card
                    key={item.id}
                    style={{ width: "600px", margin: "0 auto", marginBottom: "20px" }}
                    className="mb-2"
                    onClick={() => handleCardClick(item)}
                >
                    <Card.Body>
                        <Row>
                            <Col md={4}>
                                <img
                                    src={item.thumbnail}
                                    alt="thumbnail"
                                    style={{ width: "100%", margin: "10px" }}
                                />
                            </Col>

                            <Col md={8}>
                                <Card.Text>{item.description}</Card.Text>
                                <Card.Text>$ {item.price}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
            {hasMore && (
                <div ref={elementRef} style={{ textAlign: "center" }}>
                    Load More Items...
                </div>
            )}

            {/* Modal to display product details */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Product Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProduct && (
                        <>
                            <img
                                src={selectedProduct.thumbnail}
                                alt="thumbnail"
                                style={{ width: "100%" }}
                            />
                            <p>Description: {selectedProduct.description}</p>
                            <p>Price: $ {selectedProduct.price}</p>
                            {/* Add more product details here */}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ProductList;
