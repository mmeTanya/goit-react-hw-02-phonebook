import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

const Contact = ({ contacts, onDelete }) =>
  contacts.map(contact => (
    <li key={contact.id} className="contact__item">
      <p className="contact__text">{contact.name}</p>
      <p className="contact__text">{contact.number}</p>
      <button
        className="contact__btn"
        type="button"
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  ));

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
