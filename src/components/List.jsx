import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addToCart, fetchProducts } from "../store/productSlice";
import { Button, Container } from "react-bootstrap";
import Product from "./Product";

const List = ()=>{
    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

     useEffect(() => {
       dispatch(fetchProducts());
     }, [dispatch]);


return (
  <div>
    <Container className="p-3 mb-4">
      <h1
        className="text-primary display-6 fw-bold"
      >
        Products List
      </h1>
    </Container>
    {products.map((product) => (
      <Container key={product.id}>
        <Product product={product} />
        <Button onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </Button>
      </Container>
    ))}
  </div>
);};

export default List;