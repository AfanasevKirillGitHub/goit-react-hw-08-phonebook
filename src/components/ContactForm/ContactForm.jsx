import { useState } from 'react';

import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import {
  Form,
  Input,
  AddContact,
  Text,
  ContactFormWrapper,
} from './ContactForm.styled';

import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(({ contacts }) => contacts.contacts);
  const dispatch = useDispatch();

  const handleOnChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return console.log('error');
    }
  };

  const hanldeSubmit = event => {
    event.preventDefault();

    const newContact = { id: nanoid(), name, number };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    } else if (contacts.find(contact => contact.number === number)) {
      Notiflix.Notify.warning(`This ${number} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));

    setName('');
    setNumber('');
  };

  return (
    <ContactFormWrapper>
      <Form onSubmit={hanldeSubmit}>
        <label>
          <Text>
            <FaUserCircle color="white" size={30} />
            Username:
          </Text>
          <Input
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleOnChange}
          />
        </label>
        <label>
          <Text>
            <BsFillTelephonePlusFill color="white" size={30} /> Number:
          </Text>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleOnChange}
          />
        </label>
        <AddContact type="submit">Add contact</AddContact>
      </Form>
    </ContactFormWrapper>
  );
};
