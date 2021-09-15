import React from 'react';
import s from './ContactsList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.ContactList}>
      {contacts.map(({ id, name, phone }) => {
        return (
          <li key={id} className={s.ContactList__item}>
            <ContactItem
              id={id}
              name={name}
              phone={phone}
              onDeleteContact={onDeleteContact}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactsList;
ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
