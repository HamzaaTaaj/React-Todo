import React from "react";
import CreateTaskEmptyCounter from "./createTaskEmptyCounter";

const emptyTaks = () => {
  return (
    <div>
      <CreateTaskEmptyCounter />
      <div className="Task-List">
        <img src="Clipboard.png" />
        <div>
          <p className="descrip">
            You don't have tasks registered yet Create tasks and organize your
            to-do items
          </p>
        </div>
      </div>
    </div>
  );
};

export default emptyTaks;
