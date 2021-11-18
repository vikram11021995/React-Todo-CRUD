import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../services/constant";
import { todos } from "./states";

export let reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state];
      newTodos.push(action.payload);
      return newTodos;

    case DELETE_TODO:
      newTodos = [...state];
      newTodos.splice(action.payload, 1);
      return newTodos;

    case UPDATE_TODO:
      newTodos = [...state];
      const index = newTodos.findIndex((todo) => todo.id === action.payload.id);
      newTodos[index] = action.payload;
      return newTodos;
  }
  return state;
};
