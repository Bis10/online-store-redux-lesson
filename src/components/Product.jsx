import React from 'react'
import { Container, Image } from 'react-bootstrap'

const Product = ({product}) => {
    console.log("product", product)

  return (
    <Container className="p-3 mb-4">
      <h5 className="text-primary fw-bold">Product Name: {product.title}</h5>
      <p className="text-muted">Description: {product.description}</p>
      <p className="text-success fw-bold">Price: ${product.price}</p>
      <Image
        src={product.image}
        style={{ width: "400px", height: "400px" }}
        fluid
      />
    </Container>
  );
};

export default Product;