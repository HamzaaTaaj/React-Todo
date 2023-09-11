import CreateTaskDataCounter from "./createdTaskDataCounter";
const Datay = [
  {
    id: 1,
    Descrip:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    id: 2,
    Descrip:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
  {
    id: 3,
    Descrip:
      "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  },
];

const taskList = () => {
  return (
    <div>
      <CreateTaskDataCounter />
      <div>
        {Datay.map((taskes, index) => (
          <div className="tasklist-Data" key={index}>
            <div key={taskes.id}>
              <img src="check.png" alt="name" />
            </div>
            <p className="tasks">{taskes.Descrip}</p>

            <div>
              <img src="trash.png" alt="newname" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default taskList;
