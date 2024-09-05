import React from "react";
import { useAppSelector } from "../hooks/hooks";
import { Container, ListGroup } from "react-bootstrap";

const Cart = () => {
  const cartItems = useAppSelector((state) => state.products.cart);

  return (
    <Container className="p-3">
      <h1 className="text-primary display-6 fw-bold">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ListGroup>
          {cartItems.map((item) => (
            <ListGroup.Item key={item.id}>
              {item.title} - ${item.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Cart;
