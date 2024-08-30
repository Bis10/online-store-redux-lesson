import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from './components/List';
import Cart from './components/Cart';
import StoreNavbar from './components/StoreNavbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <StoreNavbar/>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;