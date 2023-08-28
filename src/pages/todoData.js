import React from "react";
import Header from "../components/Header";
import Search from "../components/searchbox";
import Todo from "../components/taskList";
import Create from "../components/createTask";
import Empty from "../components/emptyTaks";

const todoData = () => {
  return (
    <div>
      <Header />
      <Search />

      <Create />

      <Todo />
    </div>
  );
};

export default todoData;
