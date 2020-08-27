import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import MainTitle from '../mainTitle/MainTitle';
import ContactForm from '../contactForm/ContactForm';
import FindContactInput from '../findContactInput/FindContactInput';
import ContactsList from '../contactsList/ContactsList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      name: name,
      number: number,
      id: uuidv4(),
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact],
      };
    });
  };
  changeFilter = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };
  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <MainTitle />
        <ContactForm addContact={this.addContact} contacts={filteredContacts} />
        <FindContactInput value={filter} onChangeFilter={this.changeFilter} />
        {filteredContacts.length > 0 && (
          <ContactsList
            deleteContact={this.handleDelete}
            contacts={filteredContacts}
          />
        )}
      </div>
    );
  }
}
