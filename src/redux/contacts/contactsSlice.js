import { createSlice } from '@reduxjs/toolkit';
import basicContacts from '../../components/ContactList/basicContacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: basicContacts,
  reducers: {
    addContact: (state, { payload }) => {
      state.push(payload);
    },
    deleteContact: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
