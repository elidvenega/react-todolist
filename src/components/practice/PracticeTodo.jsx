import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function PracticeTodo() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  const handleDataChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, text]);
    setText("");
  };

  const handleDelete = (i) => {
    const newTodos = [...data];
    newTodos.splice(i, 1);
    setData(newTodos);
  };
  return (
    <div>
      <section className="container">
        <h1>Practice Todo list</h1>
        <form>
          <input
            type="text"
            placeholder="todo"
            value={text}
            onChange={handleDataChange}
          />
          <button type="button" onClick={handleSubmit}>
            Add
          </button>
        </form>
        <ul>
          {data.map((todo, index) => (
            <li key={uuidv4()}>
              {todo}
              <button className="del-btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
