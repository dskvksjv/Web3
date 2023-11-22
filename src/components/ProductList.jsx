import React, { useState } from 'react';
import ProductItem from './ProductItem';
import ProductDetail from './ProductDetail';
import '../css/ProductList.css';

const ProductList = ({ products, onCheckboxChange, onCommentSubmit }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (productId) => {
    const selected = products.find((product) => product.id === productId);
    setSelectedProduct(selected);
  };

  return (
    <div>
      <h2>Список Товарів</h2>
      <ul>
        {products.map(product => ( //МАР
          <ProductItem
            key={product.id}
            product={product}
            onCheckboxChange={onCheckboxChange}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </ul>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onCommentSubmit={onCommentSubmit}
        />
      )}
    </div>
  );
}

export default ProductList;
