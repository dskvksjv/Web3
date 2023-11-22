import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(comment);
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Додати коментар:
        <textarea value={comment} onChange={handleInputChange} />
      </label>
      <button type="submit">Відправити</button>
    </form>
  );
};

export default CommentForm;
