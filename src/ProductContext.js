// ProductContext.js
import { createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Товар 1', price: 10.99, selected: false },
    { id: 2, name: 'Товар 2', price: 19.99, selected: false },
    // Add other products as needed
  ]);

  const handleCheckboxChange = (productId) => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) =>
        product.id === productId ? { ...product, selected: !product.selected } : product
      );
    });
  };

  return (
    <ProductContext.Provider value={{ products, handleCheckboxChange }}>
      {children}
    </ProductContext.Provider>
  );
};
