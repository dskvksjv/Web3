import React, { useState } from 'react';
import CommentForm from './CommentForm';
import '../css/ProductDetail.css';

const ProductDetail = ({ product }) => {
  const [comments, setComments] = useState([]);

  const handleAddComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Ціна: {product.price}</p>
      <p>Опис: {product.description}</p>
      
      <h3>Коментарі:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>

      <CommentForm onAddComment={handleAddComment} />
    </div>
  );
};

export default ProductDetail;
