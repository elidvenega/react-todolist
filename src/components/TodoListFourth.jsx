import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoListFourth() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleInput = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  };

  const handleDelete = (index) => {
    const newTodos = [...list];
    newTodos.splice(index, 1);
    setList(newTodos);
  }

  return (
    <div>
      <section className="container">
        <h1>Todo List</h1>
        <form>
          <input 
          type="text"
          value={text}
           placeholder="Add Todo" onChange={handleInput} />
          <button type="button" onClick={handleSubmit}>
            Add
          </button>
        </form>
        <ul>
          {list.map((text, index) => (
            <li key={uuidv4}>{text}
             <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
           
          ))}
        </ul>
      </section>
    </div>
  );
}
