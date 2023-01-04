import { Component } from 'react';
import Box from './Box/Box';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = { id: nanoid(), name, number };

    if (contacts.find(contact => contact.name === name)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  filterOnChange = event => {
    this.setState({ filter: event.target.value });
  };

  toLowerCaseFilter = () => {
    const { contacts, filter } = this.state;
    const normalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contacts")
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  render() {
    const { filter } = this.state;
    const normalizeContact = this.toLowerCaseFilter();

    return (
      <Box mx="auto" maxWidth={500}>
        <h2
          style={{
            textAlign: 'center',
            marginTop: '10px',
            marginBottom: '10px',
          }}
        >
          Phonebook
        </h2>
        <ContactForm addContact={this.addContact} />
        <h2 style={{ textAlign: 'center' }}>Contacts</h2>
        <Box
          p={32}
          mx="auto"
          maxWidth={500}
          background="#292929"
          borderRadius={30}
        >
          <Filter filterOnChange={this.filterOnChange} value={filter} />
          <ContactList
            contacts={normalizeContact}
            onDelete={this.deleteContact}
          />
        </Box>
      </Box>
    );
  }
}
