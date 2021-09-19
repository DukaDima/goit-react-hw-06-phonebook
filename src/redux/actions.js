// import types from './types';
import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contact/add', (name, phone) => ({
  payload: {
    id: shortid.generate(),
    name,
    phone,
  },
}));

const deleteContact = createAction('contact/delete');

const changeFilter = createAction('contact/changeFilter');

export default { addContact, deleteContact, changeFilter };

//=================Redux================================

// const addContact = (name, phone) => ({
//   type: types.ADDCONTACT,
//   payload: {
//     id: shortid.generate(),
//     name,
//     phone,
//   },
// });

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
