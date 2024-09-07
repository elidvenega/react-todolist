import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "../liststyles.css";

// classes being used
/* 
container
btn 
del-btn
*/

const dailyTodos = ["Shit", "Eat", "Walk", "Read"];

export default function PreviousCode() {
  const storedTodos = JSON.parse(localStorage.getItem("todos")) || dailyTodos;
  const [todoList, setTodoList] = useState(storedTodos);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      const newTodoList = [...todoList, inputValue];
      setTodoList(newTodoList);
      setInputValue("");
      localStorage.setItem("todos", JSON.stringify(newTodoList));
    }
  };

  const handleDelete = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
    localStorage.setItem("todos", JSON.stringify(newList));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodoList(savedTodos);
    }
  }, []);
  return (
    <div className="container">
      <h1>Todo List</h1>
      <form action="">
        <input
          type="text"
          placeholder="Add Todo"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="btn" onClick={handleSubmit}>
          Add Todo
        </button>
      </form>
      <ul>
        {todoList.map((text, index) => (
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
