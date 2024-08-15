import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoListThree() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleInput = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, text]);
    // Will reset placeholder
    setText("");
  };

  const handleDelete = (index) => {
    const list = [...todos];
    list.splice(index, 1);
    setTodos(list);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form>
        <input type="text" placeholder="todo" onChange={handleInput} />
        <button type="button" onClick={handleSubmit}>
          Click
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={uuidv4()}>
            {todo}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
