import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: JSON.parse(localStorage.getItem('todos')) || [],
  isOpen: false,
  isDeleted: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        text: action.payload,
        completed: false,
      });

      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    deleteTodo: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.filter((todo) => todo.text.id !== id);

      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    openModal: (state) => {
      state.isOpen = true;
    },

    closeModal: (state) => {
      state.isOpen = false;
    },

    startDelete: (state) => {
      state.isDeleted = true;
    },

    cancelDelete: (state) => {
      state.isDeleted = false;
    },

    toggleCompleted: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.text.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const {
  addTodo,
  editTodo,
  deleteTodo,
  openModal,
  closeModal,
  toggleCompleted,
  setTodos,
  startDelete,
  cancelDelete,
} = todoSlice.actions;
export default todoSlice.reducer;
