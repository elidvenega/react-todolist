import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Todos() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const handleInput = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  };

  const handleDelete = (index) => {
    const listItems = [...list];
    listItems.splice(index, 1);
    setList(listItems);
  };
  return (
    <>
      <section className="container">
        <form action="#">
          <input
            type="text"
            value={text}
            placeholder="Add Todo"
            onChange={handleInput}
          />
          <button onClick={handleSubmit}>Add</button>
        </form>
        <ul>
          {list.map((text, index) => (
            <li key={uuidv4()}>
              {text}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
