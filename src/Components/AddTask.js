import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const AddTask = ({ handleFilter, filter }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    text.trim()
      ? dispatch(addTask({ id: Math.random(), action: text, isDone: false }))
      : alert("please fill the input");
    setText("");
  };
  return (
    <div>
      <h1 className="title"> Our to-do list </h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task..."
      />
      <div>
        <button type="submit" onClick={handleAdd}>
          Add
        </button>
        <button onClick={handleFilter}> {filter ? "all" : "filter"} </button>
      </div>
    </div>
  );
};

export default AddTask;
