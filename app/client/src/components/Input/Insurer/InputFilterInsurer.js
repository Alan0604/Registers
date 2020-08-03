import React, { useState } from 'react';

export default function InputFilterInsurer({ onChangeFilterInsurer }) {
  const [filter, setFilter] = useState('');

  const handleTextInputInsurer = (event) => {
    event.preventDefault();
    const newFilter = event.target.value;
    onChangeFilterInsurer(newFilter);
    setFilter(newFilter);
  };

  return (
    <div>
      <input type="text" value={filter} onChange={handleTextInputInsurer} />
    </div>
  );
}
