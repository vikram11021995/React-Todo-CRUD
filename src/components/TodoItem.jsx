import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../redux/actions";

function TodoItem({ todo, index }) {
  console.log("todo", todo);
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(todo.name);
  let [message1, updateMessage1] = useState();

  let dispatch = useDispatch();

  const handleSubmitEdit = () => {
    if (name) {
      dispatch(
        updateTodo({
          ...todo,
          name: name,
        })
      );
    }

  if (editable) {
      setName(todo.name);
      updateMessage1("")
    }

    setEditable(!editable);
  };

  const handleChange = (e) =>{
    setName(e.target.value);
    if(!e.target.value){
    updateMessage1(" * is required otherwise the same data will be displayed")
    }
  }

  return (
    <div className="container">
      <div className="row mx-2 align-items-center">
        <div className="col-md-10">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange = {handleChange}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>

        <div className="col-md-2">
          <button className="btn btn-primary m-2" onClick={handleSubmitEdit}>
            {editable ? "Update" : "Edit"}
          </button>

          <button
            className="btn btn-danger m-2"
            onClick={() => dispatch(deleteTodo(index))}
          >
            Delete
          </button>
        </div>
      </div>
      <p className="text-danger">{message1}</p>
    </div>
  );
}

export default TodoItem;
