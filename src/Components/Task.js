import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../redux/actions";
import EditTask from "./EditTask";

const Task = ({ tasks }) => {
  const dispatch = useDispatch();
  return (
    <div className="task" id={tasks.isDone ? "dim" : ""}>
      <h5 id={tasks.isDone ? "done" : ""}> -{tasks.action} </h5>
      <div className="task-btn">
        <button onClick={() => dispatch(completeTask(tasks.id))}>
          {" "}
          {tasks.isDone ? "undo" : "complete"}{" "}
        </button>
        <EditTask oldTask={tasks} />
        <button onClick={() => dispatch(deleteTask(tasks.id))}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
