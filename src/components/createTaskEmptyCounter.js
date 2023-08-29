import React from "react";
const CreateTaskEmptyCounter = () => {
  return (
    <div className="createTask">
      <div className="tasks-tab">
        <p className="created-head">
          Created Task <span className="counter">0</span>
        </p>
        <p className="created-head2">
          Completed <span className="counter">0</span>
        </p>
      </div>
    </div>
  );
};

export default CreateTaskEmptyCounter;
