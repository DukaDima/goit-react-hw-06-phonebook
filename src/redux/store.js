import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});
const store = createStore(rootReducer, composeWithDevTools());
export default store;

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   return state;
// };

// const store = createStore(reducer, composeWithDevTools());
// export default store;
