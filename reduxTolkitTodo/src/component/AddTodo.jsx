import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!todo.trim()) return
    dispatch(addTodo(todo))
    setTodo('');
  }

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 p-3">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a todo..."
        className="form-control"
      />
      <button 
        type="submit" 
        className="btn btn-primary"
      >
        Add
      </button>
    </form>
  )
}

export default AddTodo
