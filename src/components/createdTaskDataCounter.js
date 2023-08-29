import React from "react";
import Empty from "./emptyTaks";
const CreateTaskDataCounter = () => {
  return (
    <div className="createTask">
      <div className="tasks-tab2">
        <p className="created-head">
          Created Task <span className="counter">5</span>
        </p>
        <p className="created-head2">
          Completed <span className="counter">2 de 5</span>
        </p>
      </div>
    </div>
  );
};

export default CreateTaskDataCounter;
