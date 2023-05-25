import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';

// Компонент списка контактов
const ContactList = ({ contacts, onRemoveContact }) => (
  <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        {contact.name + ' : ' + contact.number}
        {
          // Кнопка удаления контакта
          <Button
            type="button"
            name="delete"
            onClick={() => onRemoveContact(contact.id)}
          >
            delete
          </Button>
        }
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.object.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;
