import React, { Component } from 'react';
import ContactsListItems from '../contactListItems/ContactsListItems';

export default class ContactsList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <>
        <ul className="contacts-list">
          {contacts.map((contact, id) => (
            <ContactsListItems
              key={id}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      </>
    );
  }
}
