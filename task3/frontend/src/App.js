import "./styles.css";
import List from "./List.js";
import Input from "./Input.js";
import { v4 as uuidv4 } from "uuid";

import { useEffect, useState } from "react";

export default function App() {
  const [todoList, settodoList] = useState([]);

  async function existingTodo() {
    const data = await fetch("http://localhost:3001/users");
    const response = await data.json();
    settodoList(response);
  };

  useEffect(() => {
    existingTodo();
  }, []);

  async function handleSubmit(task) {
    const todo = {
      id: uuidv4(),
      content: task,
    };
    const response = await fetch("http://localhost:3001/users", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo) 
    });
    const data = await response.json();
    settodoList(data);
  };

  return (
    <div className="App">
      <h1>TodoList with bugs!</h1>
      <Input handleSubmit={handleSubmit} />
      <List todoList={todoList} />
    </div>
  );
}