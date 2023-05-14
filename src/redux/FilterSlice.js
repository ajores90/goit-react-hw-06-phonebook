import { createSlice } from '@reduxjs/toolkit';

export const Filter = createSlice({
  name: 'filter',

  initialState: {
    filter: '',
    initialState: '',
  },

  reducers: {
    filterSlice: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterSlice } = Filter.actions;
