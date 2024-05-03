"use client"

import { useTodos } from "@/store/todos";
import React, { FormEvent, useState } from "react";


function AddTodo() {
  const [count, setCount] = useState("");


  const { handleAddTodo } = useTodos();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAddTodo(count);
    setCount('');
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="write your todo"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
