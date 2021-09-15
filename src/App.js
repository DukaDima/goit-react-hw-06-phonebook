import React, { useState, useEffect } from 'react';
import ContactsList from './components/ContactsList/ContactsList';
import AddContacts from './components/AddContacts/AddContacts';
import Filter from './components/Filter/Filter';
import Title from './components/Title/Title';
import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );
  const [filter, setFilter] = useState('');
  const addContact = ({ name, phone }) => {
    const contact = {
      id: shortid.generate(),
      name,
      phone,
    };

    contacts.find(elem => elem.name === contact.name)
      ? alert(`${contact.name} is already in contacts`)
      : setContacts(oldContacts => [contact, ...oldContacts]);
  };

  const deleteContact = contactId => {
    setContacts(oldContacts => {
      return oldContacts.filter(contact => contact.id !== contactId);
    });
  };
  const filterContact = e => {
    setFilter(e.currentTarget.value);
  };
  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      <h1>Телефонная книга</h1>
      <Title title={'Добавить контакт'} />
      <AddContacts onSubmit={addContact} />
      <Filter value={filter} onChange={filterContact} />
      <Title title={'Список контактов'} />
      <ContactsList
        contacts={getVisibleContact()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
