import React from "react";
import CreateTaskDataCounter from "./createdTaskDataCounter";
const TaskData = [
  {
    TaskDescrip:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
];

const taskList = () => {
  return (
    <div>
      <CreateTaskDataCounter />
      <div className="tasklist-Data">
        <div>
          <img src="check.png" />
        </div>
        <p className="tasks">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <div>
          <img src="trash.png" />
        </div>
      </div>
      <div className="tasklist-Data">
        <div>
          <img src="check.png" />
        </div>
        <p className="tasks">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <div>
          <img src="trash.png" />
        </div>
      </div>
      <div className="tasklist-Data">
        <div>
          <img src="check.png" />
        </div>
        <p className="tasks">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <div>
          <img src="trash.png" />
        </div>
      </div>
      <div className="tasklist-Data">
        <div>
          <img src="checktick.png" />
        </div>
        <p className="line-through">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <div>
          <img src="trash.png" />
        </div>
      </div>
      <div className="tasklist-Data">
        <div>
          <img src="checktick.png" />
        </div>
        <p className="line-through">
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </p>
        <div>
          <img src="trash.png" />
        </div>
      </div>
    </div>
  );
};

export default taskList;
