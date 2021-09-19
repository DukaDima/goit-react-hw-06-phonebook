import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  'contact/add': (state, { payload }) => {
    if (state.find(({ name }) => name === payload.name)) {
      alert(`${payload.name} is already in contacts`);
      return;
    }
    return [payload, ...state];
  },
  'contact/delete': (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  'contact/changeFilter': (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});

//=============Redux=========================

// import actions from './actions';
// import types from './types';

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADDCONTACT:
//       return [payload, ...state];
//     case types.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
