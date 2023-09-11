import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const taskList = [
  {
    id: 1,
    Description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isCompleted: false,
  },
  {
    id: 2,
    Description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isCompleted: false,
  },
  {
    id: 3,
    Description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isCompleted: false,
  },
  {
    id: 4,
    Description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isCompleted: true,
  },
  {
    id: 5,
    Description:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    isCompleted: true,
  },
];

function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState(taskList);

  const uniqueId = uuidv4();
  const totalTask = list.length;

  const addTask = () => {
    const newTask = { id: uniqueId, Description: task, isCompleted: false };
    setList([...list, newTask]);
    setTask("");
  };
  const completedTask = list.filter((item) => item.isCompleted == true);
  const allDone = completedTask.length;

  const deleteItems = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const onComplete = (id) => {
    const findIndex = list.findIndex((item) => item.id === id);
    const updateList = [...list];
    console.log(updateList[findIndex].isCompleted);

    // if (updateList[findIndex].isCompleted === false) {
    //   updateList[findIndex].isCompleted = true;
    // } else {
    //   updateList[findIndex].isCompleted = false;
    // }

    // updateList[findIndex].isCompleted === true
    //   ? (updateList[findIndex].isCompleted = false)
    //   : (updateList[findIndex].isCompleted = true);

    updateList[findIndex].isCompleted = !updateList[findIndex].isCompleted;

    setList(updateList);
  };

  return (
    <div>
      <div className="head-bg">
        <div className="Logo">
          <img src="Logo.png" alt="logo" />
        </div>
      </div>
      <div className="SearchBox">
        <div className="searchbox">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <div>
          <button className="custom-button" onClick={addTask}>
            Create
            <span className="plus-icon"> &#8853;</span>
          </button>
        </div>
      </div>
      <div className="createTask">
        <div className="tasks-tab2">
          <p className="created-head">
            Created Task <span className="counter">{totalTask}</span>
          </p>
          <p className="created-head2">
            Completed
            <span className="counter">
              {allDone} of {totalTask}
            </span>
          </p>
        </div>
      </div>
      <div>
        {list.map((data, index) => (
          <li className="tasklist-Data" key={index}>
            <div onClick={() => onComplete(data.id)}>
              <img
                style={{ display: data.isCompleted ? "none" : "block" }}
                src="check.png"
                alt="name"
                width="18px"
              />
              <img
                style={{ display: data.isCompleted ? "block" : "none" }}
                src="Layer 1.png"
                alt="name"
              />
            </div>
            <p
              className="tasks"
              style={{
                textDecoration: data.isCompleted ? "line-through" : "none",
                fontSize: data.isCompleted ? "14px" : "14px",
                opacity: data.isCompleted ? "0.2" : "100%",
              }}
            >
              {data.Description}
            </p>

            <div className="trash" onClick={() => deleteItems(data.id)}>
              <img src="trash.png" alt="newname" />
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Todo;
