import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./liststyles.css";

// classes being used
/* 
container
btn
del-btn
*/

const dailyTodos = ["Shit", "Eat", "Sleep"];
export default function TodoListThree() {
  const [todos, setTodos] = useState(dailyTodos);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const handleDelete = (index) => {
    const newList = [...todos];
    newList.splice(index, 1);
    setTodos(newList);
  };
  return (
    <div className="container">
      <h1>Todo List</h1>
      <form action="">
        <input
          type="text"
          placeholder="Add Todo"
          value={inputValue}
          onChange={handleInput}
        />
        <button type="button" className="btn" onClick={handleSubmit}>
          Add
        </button>
      </form>
      <ul>
        {todos.map((text, index) => (
          <li key={uuidv4()}>
            {text}
            <button
              type="button"
              className="del-btn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
