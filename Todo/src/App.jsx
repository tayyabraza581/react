import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import { TodoForm, TodoItem } from "./component";

function App() {
  // yahan todos likhna hai, na ke todo
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...updatedTodo } : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleted }}
    >
      <div
        className=" bg-dark mx-auto mt-5 shadow rounded px-4 py-3 text-white"
        style={{ maxWidth: "42rem", maxHeight: "30rem", overflowY: "scroll" }}
      >
        <h1 className="text-center mb-4 mt-2 fw-bold fs-3">
          Manage Your Todos
        </h1>

        <div className="mb-4">
          {/* Todo form goes here */}
          <TodoForm />
        </div>

        <div className="d-flex flex-wrap gap-2">
          {todos.map((todo) => (
            <div key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
