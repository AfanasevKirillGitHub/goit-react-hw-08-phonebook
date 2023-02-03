import { createSlice } from '@reduxjs/toolkit';
import { basicContacts } from './basicContacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: basicContacts,
  },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
