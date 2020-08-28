import React, { Component } from 'react';
import ContactsListItems from '../contactListItems/ContactsListItems';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default class ContactsList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <div>
        <TransitionGroup component="ul" className="contacts-list">
          {contacts.map((contact, id) => (
            <CSSTransition
              key={id}
              classNames="taskList-fade"
              timeout={250}
              unmountOnExit
            >
              <ContactsListItems
                contact={contact}
                deleteContact={deleteContact}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}
