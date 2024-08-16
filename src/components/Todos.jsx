import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./liststyles.css";

// classes bring used
/* 
container
btn
del-btn
*/

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const hadleDelete = (index) => {
    const newList = [...todos];
    newList.splice(index, 1);
    setTodos(newList);
  };

  return (
    <>
      <h1>Todo List</h1>
      <div className="container">
        <form action="">
          <input
            type="text"
            placeholder="Add Todod"
            value={inputValue}
            onChange={handleInput}
          />
          <button className="btn" type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>

        <ul>
          {todos.map((text, index) => (
            <li key={uuidv4()}>
              {text}
              <button
                className="del-btn"
                type="submit"
                onClick={() => hadleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
