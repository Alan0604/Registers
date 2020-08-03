import React, { useState } from 'react';

export default function InputFilterBroker({ onChangeFilter }) {
  const [filter, setFilter] = useState('');

  const handleTextIput = (event) => {
    event.preventDefault();
    const newFilter = event.target.value;
    onChangeFilter(newFilter);
    setFilter(newFilter);
  };

  return (
    <div>
      <input type="text" value={filter} onChange={handleTextIput} />
    </div>
  );
}
