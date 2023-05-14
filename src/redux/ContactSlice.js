import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const persistConfig = {
  key: 'root',
  storage,
};

const phoneBook = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

const ContactSlice = createSlice({
  name: 'contacts',

  initialState: {
    phoneBook,
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.phoneBook.push(action.payload);
      },
    },
    deleteContact: {
      reducer: (state, action) => {
        state.phoneBook = state.phoneBook.filter(
          contact => contact.id !== action.payload
        );
      },
    },
  },
});

export const persistedReducer = persistReducer(
  persistConfig,
  ContactSlice.reducer
);

export const { addContact, deleteContact } = ContactSlice.actions;
