import React, { useState, useEffect } from 'react';
import ContactsList from './components/ContactsList/ContactsList';
import AddContacts from './components/AddContacts/AddContacts';
import Filter from './components/Filter/Filter';
import Title from './components/Title/Title';
// import shortid from 'shortid';
import PropTypes from 'prop-types';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  );

  // contacts.find(elem => elem.name === contact.name)
  //       ? alert(`${contact.name} is already in contacts`)
  //       : setContacts(oldContacts => [contact, ...oldContacts]);
  //   };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      <h1>Телефонная книга</h1>
      <Title title={'Добавить контакт'} />
      <AddContacts />
      <Filter />
      <Title title={'Список контактов'} />
      <ContactsList />
    </>
  );
}
App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
