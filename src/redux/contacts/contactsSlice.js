import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsThunk,
  deleteContactThunk,
  addContactThunk,
} from './contactsThunk';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(getContactsThunk.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getContactsThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.pending, (state, _) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })

      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(payload);
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});
