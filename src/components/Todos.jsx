import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todos() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleInput = (e) => setText(e.target.value);

  const handleTask = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  };

  const handleDelete = (index) => {
    const taskList = [...list];
    taskList.splice(index, 1);

    setList(taskList);
  };
  return (
    <>
      <section>
        <form>
          <input
            type="text"
            placeholder="Add Todo"
            value={text}
            onChange={handleInput}
          />
          <button onClick={handleTask}>Add</button>
        </form>
        <ul>
          {list.map((text, index) => (
            <li key={uuidv4}>
              {text}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
