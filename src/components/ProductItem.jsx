import React, { useState } from 'react';
import ProductDetail from './ProductDetail';
import '../css/ProductItem.css';

const ProductItem = ({ product, onCheckboxChange }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleShowDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={product.selected}
        onChange={() => onCheckboxChange(product.id)}
      />
      <span>{product.name}</span>
      <span>{product.price}</span>
      <button onClick={handleShowDetail}>Деталі</button>

      {showDetail && <ProductDetail product={product} />}
    </li>
  );
};

export default ProductItem;

