import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { useEffect } from "react";
import { fetchProducts } from "./store/productSlice";

function App() {
  
  const products = useAppSelector((state) => state.products.products);
  const dispatch = useAppDispatch();
  
  useEffect(()=>{
    dispatch(fetchProducts())
  }, [dispatch])


  return (
    <>
      <div>App will be here</div>
      <Button variant="primary" size="lg">
        Click me
      </Button>
      <Button variant="warning" size="sm">
        Click me
      </Button>
      {products.map((product)=>(
        <div key={product.id}>
        <div>{product.id}</div>
        <div>{product.description}</div>
        </div>
      )
      )}
    </>
  );
}

export default App;
