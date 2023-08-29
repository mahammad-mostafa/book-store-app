import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const states = { list: [] };

const bookReducer = createSlice({
  name: 'books',
  initialState: states,
  reducers: {
    add: (state, action) => {
      const book = {
        id: v4(), title: action.payload.title, author: action.payload.author,
      };
      state.list.push(book);
    },
    remove: (state, action) => {
      state.list.filter((book) => book.id !== action.payload);
    },
  },
});

export const { add, remove } = bookReducer.actions;

export default bookReducer.reducers;