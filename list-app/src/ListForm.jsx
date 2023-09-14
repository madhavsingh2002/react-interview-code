import React, { useState } from 'react';

function ListForm({ onAddItem }) {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      onAddItem(inputText);
      setInputText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add an item"
        value={inputText}
        onChange={handleInputChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ListForm;
