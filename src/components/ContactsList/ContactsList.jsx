import React from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
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

const getVisibleContact = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContact(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(actions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
