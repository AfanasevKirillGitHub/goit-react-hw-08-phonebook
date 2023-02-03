import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filtration: (_, { payload }) => {
      return payload.toLowerCase();
    },
  },
});

export const { filtration } = filterSlice.actions;
