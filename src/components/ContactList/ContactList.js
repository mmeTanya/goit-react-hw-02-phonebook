import React from 'react';
import './ContactList.css';

const ContactList = ({ children }) => (
  <ul className="contact__list">{children}</ul>
);

export default ContactList;
