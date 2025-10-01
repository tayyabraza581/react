import React, { useState } from 'react'
import { UseTodo } from '../context/Todocontex';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)

  // naming match karo App.jsx ke saath
  const { updateTodo, deleteTodo, toggleCompleted } = UseTodo()

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg })
    setIsTodoEditable(false)
  }

  const handleToggle = () => {
    toggleCompleted(todo.id)
  }

  return (
    <div
      className={`d-flex border rounded px-3 py-1.5 gap-3 shadow-sm duration-300 text-black ${
        todo.completed ? "bg-success bg-opacity-25" : "bg-light"
      }`}
    >
      <input
        type="checkbox"
        className="form-check-input mt-1 cursor-pointer"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <input
        type="text"
        className={`form-control border outline-none w-100 bg-transparent ${
          isTodoEditable ? "border-secondary px-2" : "border-transparent"
        } ${todo.completed ? "text-decoration-line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      <button
        className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center justify-content-center"
        style={{ width: "32px", height: "32px" }}
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>

      <button
        className="btn btn-outline-danger btn-sm d-inline-flex align-items-center justify-content-center"
        style={{ width: "32px", height: "32px" }}
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem
