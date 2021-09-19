import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './reducer';
import logger from 'redux-logger';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

//=================================REDUX==================================

// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());
// export default store;
