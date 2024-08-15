import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./liststyles.css";

export default function TodoList() {
  // an empty array for state
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    // this returns an empty input
    setInputValue("");
  }

  function handleDelete(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <>
      <h1>Todo List</h1>
      <div className="container">
        <form>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Add Task"
          />
          <button className="btn" type="button" onClick={handleSubmit}>
            Add Todo
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={uuidv4()}>
              {todo}
              <button className="del-btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
