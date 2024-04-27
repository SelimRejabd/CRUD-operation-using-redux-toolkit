import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialBooks = {
  books: [
    { id: uuidv4(), title: "Book1", author: 'SR' },
    { id: uuidv4(), title: "Book2" , author: 'SR'},
    { id: uuidv4(), title: "Book3" , author: 'SR'},
    { id: uuidv4(), title: "Book4", author: 'SR' },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter(book => book.id != id)
    },
    updateBook: (state, action) => {
      const {id, title, author} = action.payload;
      state.books = state.books.filter((book) => {
        if(book.id === id){
          book.title = title;
          book.author = author;
        }
        return state.books;
      });
    }
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
