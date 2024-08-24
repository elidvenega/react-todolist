import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../liststyles.css";

// classes being used
/* 
container
btn
del-btn
*/
const dailyTodos = ["Shit", "Eat", "Fart"];
export default function PracticeTodo() {
  const [todos, setTodos] = useState(dailyTodos);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (i) => {
    const newList = [...todos];
    newList.splice(i, 1);
    setTodos(newList);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };
  return (
    <div className="container">
      <h1 className="container">Todo List</h1>
      <form action="">
        <input
          type="text"
          placeholder="Add Todo"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
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