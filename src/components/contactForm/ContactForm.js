import React, { Component } from 'react';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { name } = this.state;
    const { contacts } = this.props;
    const existedContact = contacts.find(contact => contact.name === name);
    if (existedContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.props.addContact(this.state.name, this.state.number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <section>
        <form onSubmit={this.handleSubmit} className="form">
          <label>
            Name
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Enter name"
            ></input>
          </label>
          <label>
            Number
            <input
              className="input"
              type="tel"
              value={number}
              onChange={this.handleChange}
              name="number"
              placeholder="Enter number"
            ></input>
          </label>
          <button type="submit" className="addContact-button">
            Add contact
          </button>
        </form>
      </section>
    );
  }
}
