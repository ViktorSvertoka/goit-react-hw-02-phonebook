import React from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Button, Input } from './ContactForm.styled';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  // Генерация уникальных идентификаторов для полей формы
  nameInputId = nanoid();
  numberInputId = nanoid();

  // Обработка отправки формы
  handleSubmit = event => {
    event.preventDefault();

    // Вызов функции onSubmit из родительского компонента с передачей объекта контакта
    this.props.onSubmit({ name: this.state.name, number: this.state.number });

    // Сброс состояния формы
    this.reset();
  };

  // Обработка изменения значений полей формы
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // Сброс состояния формы
  reset = () => {
    this.setState({ number: '', name: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor={this.nameInputId}>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor={this.numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact </Button>
      </Form>
    );
  }
}

export default ContactForm;
