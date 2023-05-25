import React from 'react';

// Компонент фильтрации контактов
export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      Find contacts by name
      <input type="text" value={value} onChange={onChangeFilter} />
    </div>
  );
}
