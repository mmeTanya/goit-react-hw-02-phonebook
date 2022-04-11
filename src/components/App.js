import React, { Component } from 'react';
import shortid from 'shortid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Contact from './Contact';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContacts = data => {
    console.log(data);
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    {
      this.state.contacts.some(contact => contact.name === data.name)
        ? Notify.info(`${data.name} is already in contacts`, {
            timeout: 11000,
          })
        : this.setState(prevState => ({
            contacts: [contact, ...prevState.contacts],
          }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className="container">
        <h1 className="first-title">Phonebook</h1>
        <ContactForm onSubmited={this.addContacts} />
        <h2 className="second-title">Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList>
          <Contact contacts={visibleContacts} onDelete={this.deleteContact} />
        </ContactList>
      </div>
    );
  }
}

export default App;
