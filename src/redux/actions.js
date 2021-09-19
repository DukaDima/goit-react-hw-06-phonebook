import types from './types';
import shortid from 'shortid';

const addContact = (name, phone) => ({
  type: types.ADDCONTACT,
  payload: {
    id: shortid.generate(),
    name,
    phone,
  },
});
const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});
const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
