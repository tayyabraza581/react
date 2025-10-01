import React, { useState } from 'react'
import { UseTodo } from '../context/Todocontex';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = UseTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={add} className="d-flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="form-control rounded-start"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="btn btn-success rounded-end px-3 shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;