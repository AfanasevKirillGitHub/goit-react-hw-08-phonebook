import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// get all contacts //

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        'https://63e77fe7cbdc5658737881ad.mockapi.io/contacts'
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// delete contact //

export const deleteContactThunk = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `https://63e77fe7cbdc5658737881ad.mockapi.io/contacts/${id}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// add contact //

export const addContactThunk = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post(
        'https://63e77fe7cbdc5658737881ad.mockapi.io/contacts',
        contact
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
