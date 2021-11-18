import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  let todos = useSelector((state) => state);

  return (
    <div className="my-4">
      {todos.map((todo, index) => {
        return <TodoItem key={todo.id} todo={todo} index={index}/>;
      })}
    </div>
  );
}

export default TodoList;
