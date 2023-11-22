import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Menu from './components/Menu';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetail'; 
import './App.css';

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Mascara', price: 10.99, selected: false, selected: false, description: 'Дуже корисний товар 1' },
    { id: 2, name: 'Lipstick', price: 19.99, selected: false, selected: false, description: 'Дуже корисний товар 2' },
  ]);

  const handleCheckboxChange = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === productId ? { ...product, selected: !product.selected } : product
      );
    });
  };

  return (
    <Router>
      <div className="app">
        <Header />
        <Menu />
        <Body>
          <Routes> 
            <Route path="/" element={<h2>Ласкаво просимо в мій інтернет-магазин!</h2>} />
            <Route path="/products" element={<ProductList products={products} onCheckboxChange={handleCheckboxChange} />} />
            <Route path="/product/:id" element={<ProductDetails product={products[0]} />} />
          </Routes>
        </Body>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
