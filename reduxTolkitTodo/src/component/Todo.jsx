import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todo() {
  const todos = useSelector((state) => state.todos.todos) // ✅ fixed
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="list-group mt-3">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between">
            {todo.text}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="btn btn-sm btn-danger"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
