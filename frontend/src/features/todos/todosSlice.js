import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const baseURL = "http://localhost:4000";

const initialState = {
  todos: [],
  isLoading: false,
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  try {
    const res = await fetch(`${baseURL}/api/todos/`);
    const data = await res.json();

    return data;
  } catch (err) {
    return err.message;
  }
});

export const createTodo = createAsyncThunk("todos/createTodo", async (todo) => {
  try {
    const res = await fetch(`${baseURL}/api/todos/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    return err.message;
  }
});

export const editTodo = createAsyncThunk("todos/editTodo", async (todo) => {
  try {
    const res = await fetch(`${baseURL}/api/todos/${todo._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: todo.body, duration: todo.duration }),
    });
    const data = await res.json();

    return data;
  } catch (err) {
    return err.message;
  }
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  try {
    const res = await fetch(`${baseURL}/api/todos/${id}`, {
      method: "DELETE",
    });
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

    [createTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [createTodo.fulfilled]: (state, action) => {
      state.todos = [action.payload, ...state.todos];
      state.isLoading = false;
    },
    [createTodo.rejected]: (state) => {
      state.isLoading = false;
    },

    [editTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [editTodo.fulfilled]: (state, action) => {
      state.todos = state.todos
        .map((todo) =>
          // loop through each original todos, if the todo id is = to the payload id
          // return the payload (it means it's updated) else just return all original todos
          todo._id === action.payload._id ? action.payload : todo
        )
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

      state.isLoading = false;
    },
    [editTodo.rejected]: (state) => {
      state.isLoading = false;
    },

    [deleteTodo.pending]: (state) => {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo._id !== action.payload._id
      );
      state.isLoading = false;
    },
    [deleteTodo.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default todosSlice.reducer;
