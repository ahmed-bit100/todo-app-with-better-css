import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import Task from "./Task";

const TaskList = () => {
  const taskList = useSelector((state) => state.tasks);
  const [filter, setFilter] = useState(false);
  const handleFilter = () => setFilter(!filter);
  return (
    <div>
      <AddTask handleFilter={handleFilter} filter={filter} />
      {filter
        ? taskList
            .filter((task) => task.isDone)
            .map((el, index) => <Task tasks={el} key={index} />)
        : taskList.map((el, index) => <Task tasks={el} key={index} />)}
    </div>
  );
};

export default TaskList;
