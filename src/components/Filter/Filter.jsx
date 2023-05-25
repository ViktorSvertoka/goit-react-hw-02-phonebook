import React from 'react';
import { Div, Label, Input } from './Filter.styled';

// Компонент фильтрации контактов
export default function Filter({ value, onChangeFilter }) {
  return (
    <Div>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </Div>
  );
}
