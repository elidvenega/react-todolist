import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./liststyles.css";

// classes being used
/* 
container
btn
del-btn
*/

const dailyTodos = ["Shit", "Eat", "Cook"];
export default function KeyDownTodo() {
  const [todoList, setTodoList] = useState(dailyTodos);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => setInputValue(e.target.value);

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };

  const handleDelete = (index) => {
    const newList = [...todoList];
    newList.splice(index, 1);
    setTodoList(newList);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
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
          onKeyDown={handleKeyDown}
        />
        <button type="button" className="btn" onClick={handleSubmit}>
          Add
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
            >Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
