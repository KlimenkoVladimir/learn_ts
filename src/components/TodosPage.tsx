import React, { FC, useEffect, useState } from "react";
import List from "./List";
import TodoItem from "./TodoItem";
import { ITodo } from "./types/types";
import axios from "axios";

const TodoPages: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => (
        <TodoItem key={todo.id} todo={todo}></TodoItem>
      )}
    ></List>
  );
};

export default TodoPages;
