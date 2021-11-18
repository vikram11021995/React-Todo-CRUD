import React, { useState } from "react";
import { addTodo } from "../redux/actions";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import "./TodoInput.css";


function TodoInput() {
  let [name, setName] = useState();
  let [message, updateMessage] = useState();

  let dispatch = useDispatch();

  const handleSubmit = () => {
    if (name) {
      dispatch(
        addTodo({
          id: uuid(),
          name: name,
        })
      );
      setName("");
      // updateMessage("")
    } else {
      updateMessage("* is required");
    }
  };

  const handleChange = (e) =>{
    setName(e.target.value)
    updateMessage("")
  }

  return (
    <div className="container">
      <div className="row">
        <h4 className="text-center task-heading" style={{ marginLeft: "-17px" }}>
          TO DO CRUD using React and Redux
        </h4>
      </div>
      <div className="row m-2">
        <div className="col-md-10">
          <input
            value={name}
            // onChange={(e) => setName(e.target.value)}
            onChange={handleChange}
            required
            type="text"
            className="col form-control"
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary mx-2" onClick={handleSubmit}>
            Add List
          </button>
        </div>
      </div>
      <p className="text-danger">{message}</p>
    </div>
  );
}

export default TodoInput;
