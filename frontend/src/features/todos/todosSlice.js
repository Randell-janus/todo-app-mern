import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  isLoading: false,
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  try {
    const res = await fetch("/api/todos/");
    const data = await res.json();

    return data;
  } catch (err) {
    return err.message;
  }
});

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: {
    [getTodos.pending]: (state) => {
      state.isLoading = true;
    },
    [getTodos.fulfilled]: (state, action) => {
      state.todos = action.payload;
      state.isLoading = false;
    },
    [getTodos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default todosSlice.reducer;
