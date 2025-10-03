import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'   // 👈 add this

export const store = configureStore({
  reducer: {
    todos: todoReducer   // 👈 reducer key should match your slice
  }
})
