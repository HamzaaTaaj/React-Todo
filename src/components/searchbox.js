import React, { useState } from "react";
const taskList = [
  {
    id: 1,
    description: "Line Heading",
    isComplete: false,
  },
  {
    id: 2,
    description: "Line Heading 2",
    isComplete: true,
  },
];
function Searchbox() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(taskList);
  const addTask = () => {
    const newTask = { id: 1, description: task, isComplete: false };
    setList([...list, newTask]);

    setTask("");
  };
  const handleOnChnage = (e) => {
    setTask(e.target.value);
  };
  console.log(list);
  return (
    <div>
      <div className="SearchBox">
        <div className="searchbox">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => handleOnChnage(e)}
          />
          {list.map((data) => (
            <div>{data.description}</div>
          ))}
        </div>

        <div>
          <button className="custom-button" onClick={addTask}>
            Create
            <span className="plus-icon"> &#8853;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Searchbox;
