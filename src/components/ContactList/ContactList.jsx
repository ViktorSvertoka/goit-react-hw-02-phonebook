import React from 'react';

// Компонент списка контактов
const ContactList = ({ contacts, onRemoveContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          // Кнопка удаления контакта
          <button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

export default ContactList;
