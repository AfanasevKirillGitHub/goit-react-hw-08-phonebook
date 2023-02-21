import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// get all contacts //

export const getContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios('/contacts');
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
      const { data } = await axios.delete(`/contacts/${id}`);
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
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
