import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "../liststyles.css";

// classes being used
/* 
container
btn 
del-btn
*/

const dailyTodos = ["Shit", "Eat", "Brish Teeth", "Walk"];
export default function PracticeStorage() {
  // Load todos from localStorage or use the initial list if none are found
  const storedTodos = JSON.parse(localStorage.getItem("items")) || dailyTodos;
  const [todoList, setTodoList] = useState(storedTodos);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      const newTodoList = [...todoList, inputValue];
      setTodoList(newTodoList);
      setInputValue("");
      localStorage.setItem("items", JSON.stringify(newTodoList));
    }
  };

  const handleDelete = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
    localStorage.setItem("items", JSON.stringify(newList));
  };
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("items"));
    if (savedTodos) {
      setTodoList(savedTodos);
    }
  }, []);

  return (
    <div className="container">
      <form action="">
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          value={inputValue}
          onChange={handleInput}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
        />
        <button className="btn" type="button" onClick={handleSubmit}>
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
